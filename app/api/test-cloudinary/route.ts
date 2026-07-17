import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function GET() {
  try {
    const result = await cloudinary.api.ping();

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error: any) {
    console.error("Cloudinary Test Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
        error,
      },
      { status: 500 }
    );
  }
}