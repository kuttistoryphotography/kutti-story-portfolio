import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    await connectDB();

    return NextResponse.json({
      success: true,
      message: "MongoDB Connected Successfully 🚀",
    });
  } catch (error) {
    console.error("MongoDB Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}