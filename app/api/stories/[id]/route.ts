import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Story from "@/models/Story";
import mongoose from "mongoose";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    console.log("Database Name:", mongoose.connection.db?.databaseName);
    console.log("Collection Name:", Story.collection.name);
    console.log("Mongo URI:", process.env.MONGODB_URI);

    const { id } = await params;
    const body = await request.json();
    console.log("BODY:", body);

    const story = await Story.findByIdAndUpdate(
      id,
      {
        title: body.title,
        slug: body.slug,

        seoTitle: body.seoTitle,
        metaDescription: body.metaDescription,
        canonicalUrl: body.canonicalUrl,
        keywords: body.keywords ?? [],

        coverImage: body.coverImage,
        category: body.category,

        musicTitle: body.musicTitle,
        musicArtist: body.musicArtist,
        musicUrl: body.musicUrl,

        location: body.location,
        date: body.date,
        description: body.description,
        featured: body.featured ?? false,
      },
      { new: true, runValidators: true }
    );

    console.log("UPDATED STORY:", story);

    if (!story) {
      return NextResponse.json(
        { success: false, message: "Story not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Story updated successfully",
      story,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    const story = await Story.findByIdAndDelete(id);

    if (!story) {
      return NextResponse.json(
        { success: false, message: "Story not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Story deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}