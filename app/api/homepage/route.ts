import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Homepage from "@/models/Homepage";

export async function GET() {
  try {
    await connectDB();

    let homepage = await Homepage.findOne();

    if (homepage) {
      const settings = homepage.settings as any;

      if (!settings.portfolioCards || settings.portfolioCards.length === 0) {
        settings.portfolioCards = [
        {
          title: "Bridal Portraits",
          image: "",
          link: "/portfolio/bridal",
          order: 1,
          visible: true,
        },
        {
          title: "Couple Portraits",
          image: "",
          link: "/portfolio/couple",
          order: 2,
          visible: true,
        },
        {
          title: "Candid Moments",
          image: "",
          link: "/portfolio/candid",
          order: 3,
          visible: true,
        },
        {
          title: "Family Stories",
          image: "",
          link: "/portfolio/family",
          order: 4,
          visible: true,
        },
        {
          title: "Wedding Details",
          image: "",
          link: "/portfolio/wedding",
          order: 5,
          visible: true,
        },
        {
          title: "Timeless Memories",
          image: "",
          link: "/portfolio/memories",
          order: 6,
          visible: true,
        },
      ];

      homepage.markModified("settings");
      await homepage.save();
    }

    if (!settings.featuredFilms) {
      settings.featuredFilms = {
        smallTitle: "Cinematic Stories",
        heading: "Featured Films",
        description: "",
        buttonText: "View All Films",
        buttonLink: "/films",
        cards: [],
      };
    }

    while (settings.featuredFilms.cards.length < 4) {
      settings.featuredFilms.cards.push({
        title: "",
        category: "",
        duration: "",
        thumbnail: "",
        thumbnailMediaType: "image",
        videoUrl: "",
      });
    }

    homepage.markModified("settings");
    await homepage.save();

    }

    if (!homepage) {
      homepage = await Homepage.create({
      settings: {
        hero: {},

        portfolioCards: [
          {
            title: "Bridal Portraits",
            image: "",
            link: "/portfolio/bridal",
            order: 1,
            visible: true,
          },
          {
            title: "Couple Portraits",
            image: "",
            link: "/portfolio/couple",
            order: 2,
            visible: true,
          },
          {
            title: "Candid Moments",
            image: "",
            link: "/portfolio/candid",
            order: 3,
            visible: true,
          },
          {
            title: "Family Stories",
            image: "",
            link: "/portfolio/family",
            order: 4,
            visible: true,
          },
          {
            title: "Wedding Details",
            image: "",
            link: "/portfolio/wedding",
            order: 5,
            visible: true,
          },
          {
            title: "Timeless Memories",
            image: "",
            link: "/portfolio/memories",
            order: 6,
            visible: true,
          },
        ],

        showcaseSlides: [],
        storyImages: [],
        homeImages: [],
        about: {
          hero: {
            title: "",
            heading: "",
            description: "",
            experienceBadge: "",
            backgroundImage: "",
          },
        },
        siteSettings: {},

        featuredFilms: {
          smallTitle: "Cinematic Stories",
          heading: "Featured Films",
          description: "",
          buttonText: "View All Films",
          buttonLink: "/films",
          cards: [],
        },

        instagram: {
          title: "Follow Our Journey",
          username: "@kuttistoryphotography",
          buttonText: "Follow on Instagram",
          buttonUrl: "https://www.instagram.com/kuttistoryphotography/",
          images: [],
        },
      },
    });
    }

    return NextResponse.json(homepage);
  } catch (error: any) {
    console.error("Homepage GET Error:", error);

    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    await connectDB();
    
    console.log(
      "Schema has instagram:",
      Homepage.schema.path("settings.instagram") !== undefined
    );

    const { section, data } = await req.json();
    console.log("SECTION:", section);
    console.log("DATA:", JSON.stringify(data, null, 2));

    let homepage = await Homepage.findOne();

    if (!homepage) {
      homepage = await Homepage.create({
        settings: {},
      });
    }

    const settings = homepage.settings as any;

    switch (section) {
      case "hero":
      settings.hero = data;
      break;

      case "portfolioCards":
        settings.portfolioCards = data;
        break;

      case "showcaseSlides":
        settings.showcaseSlides = data;
        break;

      case "storyImages":
        settings.storyImages = data;
        break;

      case "homeImages":
        settings.homeImages = data;
        break;

      case "about":
        settings.about = data;
        break;

      case "siteSettings":
        settings.siteSettings = data;
        break;

      case "featuredFilms":
        settings.featuredFilms = data;
        break;

      case "instagram":
        settings.instagram = {
          title: data.title || "",
          username: data.username || "",
          buttonText: data.buttonText || "",
          buttonUrl: data.buttonUrl || "",
          images: Array.isArray(data.images) ? data.images : [],
        };
        break;

      default:
        return NextResponse.json(
          { error: "Invalid section" },
          { status: 400 }
        );
    }

    homepage.markModified("settings");

    await homepage.save();

    const updatedHomepage = await Homepage.findOne();

    console.log(
      "AFTER SAVE:",
      JSON.stringify(updatedHomepage?.settings?.instagram, null, 2)
    );

    return NextResponse.json({
      success: true,
      settings: homepage.settings,
    });
  } catch (error: any) {
    console.error("Homepage PUT Error:", error);

    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}