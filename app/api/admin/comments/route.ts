import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Comment from "@/models/Comment";
import Story from "@/models/Story";

export async function GET() {
  try {
    await connectDB();

    const comments = await Comment.find()
      .populate("storyId", "title")
      .sort({ createdAt: -1 });

    return NextResponse.json(comments);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to fetch comments" },
      { status: 500 }
    );
  }
}