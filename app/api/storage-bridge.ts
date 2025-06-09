import { promises as fsPromises } from 'fs';
import path from 'path';

// Environment check
const isVercel = process.env.VERCEL === '1';

// For GitHub-based storage
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO || 'your-username/your-repo';
const FILE_PATH = 'data/website-content.json';

export async function readData() {
  if (isVercel) {
    // Use GitHub API in production
    try {
      console.log('Reading data from GitHub repository');
      const response = await fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/contents/${FILE_PATH}`,
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            Accept: 'application/vnd.github.v3.raw',
          },
        }
      );
      
      if (!response.ok) {
        if (response.status === 404) {
          console.log('File not found in GitHub repository');
          return null; // File doesn't exist yet
        }
        const errorText = await response.text();
        console.error('GitHub API error response:', errorText);
        throw new Error(`GitHub API error: ${errorText}`);
      }
      
      const data = await response.json();
      console.log('Successfully read data from GitHub');
      return data;
    } catch (error) {
      console.error('Error reading from GitHub:', error);
      return null;
    }
  } else {
    // Use filesystem in development
    console.log('Reading data from local filesystem');
    try {
      const dataFilePath = path.join(process.cwd(), 'data', 'website-content.json');
      const dataDir = path.join(process.cwd(), 'data');
      
      try {
        await fsPromises.access(dataDir);
      } catch {
        console.log('Creating data directory');
        await fsPromises.mkdir(dataDir, { recursive: true });
      }
      
      try {
        await fsPromises.access(dataFilePath);
      } catch {
        console.log('File does not exist in filesystem');
        return null; // File doesn't exist
      }
      
      const data = await fsPromises.readFile(dataFilePath, 'utf8');
      console.log('Successfully read data from filesystem');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error reading from filesystem:', error);
      return null;
    }
  }
}

export async function writeData(data: any) {
  if (isVercel) {
    // Use GitHub API in production
    try {
      console.log('Writing data to GitHub repository');
      
      // First, try to get the current file to get its SHA
      let sha = '';
      try {
        const fileResponse = await fetch(
          `https://api.github.com/repos/${GITHUB_REPO}/contents/${FILE_PATH}`,
          {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
            },
          }
        );
        
        if (fileResponse.ok) {
          const fileData = await fileResponse.json();
          sha = fileData.sha;
          console.log('Found existing file in GitHub, using SHA:', sha);
        }
      } catch (error) {
        console.log('File does not exist yet in GitHub, creating new file');
        // File doesn't exist yet, which is fine
      }

      // Now save the content
      const response = await fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/contents/${FILE_PATH}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: 'Update website content',
            content: Buffer.from(JSON.stringify(data, null, 2)).toString('base64'),
            sha: sha || undefined,
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error('GitHub API error response:', errorText);
        throw new Error(`GitHub API error: ${errorText}`);
      }
      
      console.log('Successfully wrote data to GitHub');
      return true;
    } catch (error) {
      console.error('Error writing to GitHub:', error);
      throw error;
    }
  } else {
    // Use filesystem in development
    console.log('Writing data to local filesystem');
    try {
      const dataFilePath = path.join(process.cwd(), 'data', 'website-content.json');
      const dataDir = path.join(process.cwd(), 'data');
      
      try {
        await fsPromises.access(dataDir);
      } catch {
        console.log('Creating data directory');
        await fsPromises.mkdir(dataDir, { recursive: true });
      }
      
      await fsPromises.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
      console.log('Successfully wrote data to filesystem');
      return true;
    } catch (error) {
      console.error('Error writing to filesystem:', error);
      throw error;
    }
  }
}