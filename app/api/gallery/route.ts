import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Gallery from "@/models/Gallery";

export async function GET(request: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const storyId = searchParams.get("storyId");

    const query = storyId ? { storyId } : {};

    const photos = await Gallery.find(query).sort({ order: 1 });

    return NextResponse.json(
      {
        success: true,
        photos,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/gallery Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch gallery.",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const photo = await Gallery.create({
      storyId: body.storyId,
      title: body.title || "",
      image: body.image,
      public_id: body.public_id,
      category: body.category || "Wedding",
      featured: body.featured ?? false,
      order: body.order || 0,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Gallery item created successfully.",
        data: photo,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/gallery Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to create gallery item.",
      },
      { status: 500 }
    );
  }
}