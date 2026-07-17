import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";

export async function GET() {
  try {
    await connectDB();

    const testimonials = await Testimonial.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      testimonials,
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

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const testimonial = await Testimonial.create({
      name: body.name,
      location: body.location,
      review: body.review,
      image: body.image,
      rating: body.rating ?? 5,
      featured: body.featured ?? true,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Testimonial created successfully",
        testimonial,
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