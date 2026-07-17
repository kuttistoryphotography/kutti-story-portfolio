import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Faq from "@/models/Faq";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await request.json();

    const faq = await Faq.findByIdAndUpdate(
      id,
      {
        question: body.question,
        answer: body.answer,
        category: body.category,
        displayOrder: body.displayOrder ?? 0,
        isActive: body.isActive ?? true,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!faq) {
      return NextResponse.json(
        {
          success: false,
          message: "FAQ not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      faq,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
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

    const faq = await Faq.findByIdAndDelete(id);

    if (!faq) {
      return NextResponse.json(
        {
          success: false,
          message: "FAQ not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "FAQ deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}