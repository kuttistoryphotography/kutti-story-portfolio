import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Story from "@/models/Story";

export async function GET() {
  try {
    await connectDB();

    const stories = await Story.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      stories,
    });
  } catch (error: any) {
    console.error("GET Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const story = await Story.create({
      title: body.title,
      slug: body.slug,

      seoTitle: body.seoTitle,
      metaDescription: body.metaDescription,
      canonicalUrl: body.canonicalUrl,

      coverImage: body.coverImage,
      category: body.category,
      location: body.location,
      date: body.date,
      description: body.description,
      featured: body.featured ?? false,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Story created successfully",
        story,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("POST Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}