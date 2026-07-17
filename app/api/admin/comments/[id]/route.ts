import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Comment from "@/models/Comment";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

// Approve comment
export async function PATCH(
  req: NextRequest,
  { params }: Props
) {
  try {
    await connectDB();

    const { id } = await params;

    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      {
        $set: {
          approved: true,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );

    console.log("Updated Comment:", updatedComment);

    return NextResponse.json(updatedComment);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to approve comment" },
      { status: 500 }
    );
  }
}

// Delete comment
export async function DELETE(
  req: NextRequest,
  { params }: Props
) {
  try {
    await connectDB();

    const { id } = await params;

    await Comment.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to delete comment" },
      { status: 500 }
    );
  }
}