import mongoose, { Schema, models, model } from "mongoose";

const InstagramSchema = new Schema(
  {
    title: {
      type: String,
      default: "Follow Our Journey",
    },

    username: {
      type: String,
      default: "@kuttistoryphotography",
    },

    buttonText: {
      type: String,
      default: "Follow on Instagram",
    },

    buttonUrl: {
      type: String,
      default: "",
    },

    images: {
      type: [String],
      default: [],
    },
  },
  { _id: false }
);

const HomepageSchema = new Schema(
  {
    settings: {
      hero: {
        backgroundImage: {
            type: String,
            default: "",
            },

            heroSliderImages: [
            {
                image: {
                type: String,
                default: "",
                },
            },
            ],
        backgroundMediaType: { type: String, default: "image" },

        heading: { type: String, default: "" },
        subheading: { type: String, default: "" },
        paragraph: { type: String, default: "" },

        badgeText: { type: String, default: "" },

        primaryButtonText: { type: String, default: "" },
        secondaryButtonText: { type: String, default: "" },

        statsYears: { type: String, default: "" },
        statsStories: { type: String, default: "" },
        statsPassion: { type: String, default: "" },

        heroCardImage: { type: String, default: "" },
        heroCardMediaType: { type: String, default: "image" },

        awardText: { type: String, default: "" },
      },

      portfolioCards: [
        {
          title: {
            type: String,
            default: "",
          },

          image: {
            type: String,
            default: "",
          },

          link: {
            type: String,
            default: "",
          },

          order: {
            type: Number,
            default: 1,
          },

          visible: {
            type: Boolean,
            default: true,
          },
        },
      ],

      showcaseSlides: [
        {
          image1: String,
          image1MediaType: {
            type: String,
            default: "image",
          },

          image2: String,
          image2MediaType: {
            type: String,
            default: "image",
          },

          year: String,
        },
      ],

      storyImages: [
        {
          src: String,
          mediaType: {
            type: String,
            default: "image",
          },
          alt: String,
        },
      ],

      homeImages: [
        {
          key: String,
          label: String,
          url: String,
          mediaType: {
            type: String,
            default: "image",
          },
        },
      ],

      about: {
        hero: {
          title: {
            type: String,
            default: "",
          },
          heading: {
            type: String,
            default: "",
          },
          description: {
            type: String,
            default: "",
          },
          experienceBadge: {
            type: String,
            default: "",
          },
          backgroundImage: {
            type: String,
            default: "",
          },
        },
      },

      siteSettings: {
        logo: {
          type: String,
          default: "",
        },
      },

      featuredFilms: {
        smallTitle: {
          type: String,
          default: "Cinematic Stories",
        },

        heading: {
          type: String,
          default: "Featured Films",
        },

        description: {
          type: String,
          default: "",
        },

        buttonText: {
          type: String,
          default: "View All Films",
        },

        buttonLink: {
          type: String,
          default: "/films",
        },

        cards: [
          {
            title: {
              type: String,
              default: "",
            },

            category: {
              type: String,
              default: "",
            },

            duration: {
              type: String,
              default: "",
            },

            thumbnail: {
              type: String,
              default: "",
            },

            thumbnailMediaType: {
              type: String,
              default: "image",
            },

            videoUrl: {
              type: String,
              default: "",
            },
          },
        ],
      },

      instagram: InstagramSchema,
      
    },
  },
  {
    timestamps: true,
  }
);


if (mongoose.models.Homepage) {
  delete mongoose.models.Homepage;
}

export default model("Homepage", HomepageSchema);