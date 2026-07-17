import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Homepage from "@/models/Homepage";

export async function GET() {
  try {
    await connectDB();

    let homepage = await Homepage.findOne();

    if (!homepage) {
      homepage = await Homepage.create({
        settings: {
          hero: {
            images: [],
          },
        },
      });
    }

    return NextResponse.json({
  success: true,
  hero: homepage.settings?.hero ?? {},
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

export async function PUT(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    let homepage = await Homepage.findOne();

    if (!homepage) {
      homepage = await Homepage.create({
        settings: {
          hero: {
            images: body.images || [],
          },
        },
      });
    } else {
      const settings = homepage.settings as any;

      settings.hero = settings.hero || {};
      settings.hero.images = body.images || [];

      homepage.markModified("settings");
      await homepage.save();
    }

    return NextResponse.json({
      success: true,
      message: "Hero updated successfully",
      hero: homepage.settings?.hero ?? {},
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