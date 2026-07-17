import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Faq from "@/models/Faq";

export async function GET() {
  try {
    await connectDB();

    const faqs = await Faq.find().sort({
      displayOrder: 1,
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      faqs,
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

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    const faq = await Faq.create({
      question: body.question,
      answer: body.answer,
      category: body.category,
      displayOrder: body.displayOrder ?? 0,
      isActive: body.isActive ?? true,
    });

    return NextResponse.json(
      {
        success: true,
        faq,
      },
      { status: 201 }
    );
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