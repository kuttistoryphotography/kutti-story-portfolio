import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Gallery from "@/models/Gallery";


export async function GET() {
  try {
    await connectDB();

    const photos = await Gallery.find()
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      photos,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load portfolio.",
      },
      {
        status: 500,
      }
    );
  }
}