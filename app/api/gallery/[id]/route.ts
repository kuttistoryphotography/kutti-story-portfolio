import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Gallery from "@/models/Gallery";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

// Update Photo
export async function PUT(
  request: Request,
  { params }: RouteContext
) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await request.json();

    const photo = await Gallery.findByIdAndUpdate(
      id,
      {
        title: body.title,
        image: body.image,
        public_id: body.public_id,
        category: body.category,
        featured: body.featured,
        order: body.order,

        seo: {
          metaTitle: body.seo?.metaTitle || "",
          metaDescription: body.seo?.metaDescription || "",
          canonicalUrl: body.seo?.canonicalUrl || "",
          keywords: body.seo?.keywords || [],
          ogTitle: body.seo?.ogTitle || "",
          ogDescription: body.seo?.ogDescription || "",
          geoTitle: body.seo?.geoTitle || "",
          geoDescription: body.seo?.geoDescription || "",
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return NextResponse.json({
      success: true,
      photo,
    });
  } catch (error) {
    console.error("PUT Gallery Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Update failed.",
      },
      {
        status: 500,
      }
    );
  }
}

// Delete Photo
export async function DELETE(
  request: Request,
  { params }: RouteContext
) {
  try {
    await connectDB();

    const { id } = await params;

    await Gallery.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Photo deleted successfully.",
    });
  } catch (error) {
    console.error("DELETE Gallery Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Delete failed.",
      },
      {
        status: 500,
      }
    );
  }
}