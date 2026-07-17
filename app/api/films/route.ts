import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Films from "@/models/Films";

export async function GET() {
  try {
    await connectDB();

    let films = await Films.findOne();

    if (!films) {
      films = await Films.create({
        settings: {
          hero: {
            heading: "",
            subheading: "",
            paragraph: "",
          },

          featuredFilm: {
            title: "",
            category: "",
            thumbnail: "",
            videoUrl: "",
          },

          recentFilms: [],
        },
      });
    }

    return NextResponse.json(films);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch films." },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    await connectDB();

    const { section, data } = await req.json();

    let films = await Films.findOne();

    if (!films) {
      films = await Films.create({ settings: {} });
    }

    films.settings[section] = data;

    await films.save();

    return NextResponse.json({
      success: true,
      settings: films.settings,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update films." },
      { status: 500 }
    );
  }
}