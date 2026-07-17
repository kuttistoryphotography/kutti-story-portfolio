import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import ServicesPage from "@/models/ServicesPage";

export async function GET() {
  try {
    await connectDB();

    let page = await ServicesPage.findOne();

    if (!page) {
      page = await ServicesPage.create({
        settings: {},
      });
    }

    return NextResponse.json(page);
  } catch (error: any) {
    console.error("ServicesPage GET Error:", error);

    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(req: Request) {
  try {
    await connectDB();

    const { section, data } = await req.json();
    console.log("SECTION:", section);
    console.log("DATA:", data);

    let page = await ServicesPage.findOne();

    if (!page) {
      page = await ServicesPage.create({
        settings: {},
      });
    }

    page.settings = page.settings || {};

    switch (section) {
      case "hero":
        page.settings.hero = data;
        break;

      case "showcase":
        page.settings.showcase = data;
        break;

      case "cardGrid":
        page.settings.cardGrid = data;
        break;

      default:
        return NextResponse.json(
          {
            error: "Invalid section",
          },
          {
            status: 400,
          }
        );
    }

    page.markModified("settings");

    await page.save();

    return NextResponse.json({
      success: true,
      settings: page.settings,
    });
  } catch (error: any) {
    console.error("ServicesPage PUT Error:", error);

    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}