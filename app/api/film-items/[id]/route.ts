import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Film from "@/models/Film";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await req.json();

    const film = await Film.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!film) {
      return NextResponse.json(
        {
          success: false,
          message: "Film not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      film,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update film.",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: Params
) {
  try {
    await connectDB();

    const { id } = await params;

    const film = await Film.findByIdAndDelete(id);

    if (!film) {
      return NextResponse.json(
        {
          success: false,
          message: "Film not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Film deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete film.",
      },
      { status: 500 }
    );
  }
}