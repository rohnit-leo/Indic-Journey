import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fsPromises } from 'fs';

// Path to our data file
const dataFilePath = path.join(process.cwd(), 'data', 'website-content.json');

// Ensure the data directory exists
const ensureDirectoryExists = async () => {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await fsPromises.access(dataDir);
  } catch (error) {
    // Directory doesn't exist, create it
    await fsPromises.mkdir(dataDir, { recursive: true });
  }
};

// GET handler to fetch the website content
export async function GET() {
  try {
    await ensureDirectoryExists();

    // Check if file exists
    try {
      await fsPromises.access(dataFilePath);
    } catch (error) {
      // If file doesn't exist, return empty data
      return NextResponse.json({
        message: 'No data found',
        data: null
      });
    }

    // Read the file
    const data = await fsPromises.readFile(dataFilePath, 'utf8');
    const parsedData = JSON.parse(data);

    return NextResponse.json({
      message: 'Data fetched successfully',
      data: parsedData
    });
  } catch (error: any) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { message: 'Error fetching data', error: error.message },
      { status: 500 }
    );
  }
}

// POST handler to save the website content
export async function POST(request: Request) {
  try {
    await ensureDirectoryExists();
    const data = await request.json();

    // Validate data
    if (!data) {
      return NextResponse.json(
        { message: 'No data provided' },
        { status: 400 }
      );
    }

    // Save the data to the file
    await fsPromises.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf8');

    return NextResponse.json({
      message: 'Data saved successfully',
      data
    });
  } catch (error: any) {
    console.error('Error saving data:', error);
    return NextResponse.json(
      { message: 'Error saving data', error: error.message },
      { status: 500 }
    );
  }
}
