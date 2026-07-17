import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function PUT(
  request: Request,
  { params }: RouteContext
) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await request.json();

    const testimonial = await Testimonial.findByIdAndUpdate(
      id,
      {
        name: body.name,
        location: body.location,
        review: body.review,
        image: body.image,
        rating: body.rating,
        featured: body.featured,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!testimonial) {
      return NextResponse.json(
        {
          success: false,
          message: "Testimonial not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      testimonial,
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
  request: Request,
  { params }: RouteContext
) {
  try {
    await connectDB();

    const { id } = await params;

    const testimonial = await Testimonial.findByIdAndDelete(id);

    if (!testimonial) {
      return NextResponse.json(
        {
          success: false,
          message: "Testimonial not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Testimonial deleted successfully",
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