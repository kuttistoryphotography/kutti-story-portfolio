import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";

export async function GET() {
  console.log("✅ NEW SERVICES API RUNNING");

  try {
    await connectDB();

    const services = await Service.find().sort({ sortOrder: 1 });

    return NextResponse.json({
      services,
    });
  } catch (error: any) {
    console.error("Services GET Error:", error);

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    console.log("POST BODY:", body);

    const slug =
      body.slug ||
      body.title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-");

    const service = await Service.create({
      ...body,
      slug,
    });

    return NextResponse.json({
      success: true,
      service,
    });
  } catch (error: any) {
    console.error("Services POST Error:", error);

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const { id, ...updates } = body;

    const service = await Service.findByIdAndUpdate(
      id,
      updates,
      {
        new: true,
      }
    );

    return NextResponse.json({
      success: true,
      service,
    });
  } catch (error: any) {
    console.error("Services PUT Error:", error);

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();

    const id = req.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          error: "Missing service id",
        },
        {
          status: 400,
        }
      );
    }

    await Service.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
    });
  } catch (error: any) {
    console.error("Services DELETE Error:", error);

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}