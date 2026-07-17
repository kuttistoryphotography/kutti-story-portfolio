import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

import Gallery from "@/models/Gallery";
import Story from "@/models/Story";

export async function GET() {
  try {
    // Connect to MongoDB
    await connectDB();

    // Fetch counts in parallel
    const [photos, stories] = await Promise.all([
      Gallery.countDocuments(),
      Story.countDocuments(),
    ]);

    return NextResponse.json(
      {
        success: true,
        stats: {
          photos,
          stories,
          testimonials: 0,
          services: 0,
        },
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Dashboard API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to load dashboard.",
      },
      {
        status: 500,
      }
    );
  }
}