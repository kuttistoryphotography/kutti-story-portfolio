import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Comment from "@/models/Comment";

// GET approved comments
export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const storyId = searchParams.get("storyId");

    if (!storyId) {
      return NextResponse.json(
        { message: "Story ID is required" },
        { status: 400 }
      );
    }

    const comments = await Comment.find({
      storyId,
      approved: true,
    }).sort({ createdAt: -1 });

    return NextResponse.json(comments);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to fetch comments" },
      { status: 500 }
    );
  }
}

// POST new comment
export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const comment = await Comment.create({
      storyId: body.storyId,
      name: body.name,
      email: body.email,
      comment: body.comment,
      rating: body.rating || 5,
    });

    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to save comment" },
      { status: 500 }
    );
  }
}