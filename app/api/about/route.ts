import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import About from "@/models/About";

export async function GET() {
  try {
    await connectDB();

    let about = await About.findOne();

    if (!about) {
      about = await About.create({
        settings: {},
      });
    }

    return NextResponse.json(about);
    } catch (error: any) {
    console.error("About GET Error:", error);

    return NextResponse.json(
        {
        error: error.message,
        stack: error.stack,
        },
        { status: 500 }
    );
    }
}

export async function PUT(req: Request) {
  try {
    await connectDB();

    const { section, data } = await req.json();

    let about = await About.findOne();

    if (!about) {
      about = await About.create({
        settings: {},
      });
    }

    about.settings = about.settings || {};

    switch (section) {
      case "hero":
        about.settings.hero = data;
        break;

      case "story":
        about.settings.story = data;
        break;

      case "team":
        about.settings.team = data;
        break;

      case "timeline":
        about.settings.timeline = data;
        break;

      default:
        return NextResponse.json(
          { error: "Invalid section" },
          { status: 400 }
        );
    }

    about.markModified("settings");

    await about.save();

    return NextResponse.json({
      success: true,
      settings: about.settings,
    });
  } catch (error: any) {
    console.error("About PUT Error:", error);

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}