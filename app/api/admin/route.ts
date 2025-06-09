import { NextResponse } from 'next/server';
import { readData, writeData } from '../storage-bridge';

// GET handler to fetch the website content
export async function GET() {
  try {
    console.log('GET request received to fetch website content');
    const parsedData = await readData();
    
    if (parsedData === null) {
      console.log('No data found, returning empty response');
      return NextResponse.json({
        message: 'No data found',
        data: null
      });
    }

    console.log('Data fetched successfully');
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
    console.log('POST request received to save website content');
    const data = await request.json();

    // Validate data
    if (!data) {
      console.log('No data provided in request');
      return NextResponse.json(
        { message: 'No data provided' },
        { status: 400 }
      );
    }

    // Save the data
    console.log('Saving website content');
    await writeData(data);

    console.log('Data saved successfully');
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