import { Schema, model, models } from "mongoose";

const ServicesPageSchema = new Schema(
  {
    settings: {
      hero: {
        heading: {
          type: String,
          default: "",
        },
        subheading: {
          type: String,
          default: "",
        },
        paragraph: {
          type: String,
          default: "",
        },
        heroImage: {
          type: String,
          default: "",
        },
        heroImageType: {
          type: String,
          default: "image",
        },
        heroVideo: {
          type: String,
          default: "",
        },
        heroVideoType: {
          type: String,
          default: "video",
        },
      },

      showcase: {
        heading: {
          type: String,
          default: "Our Services",
        },
        
        subheading: {
          type: String,
          default: "What We Offer",
        },
        description: {
          type: String,
          default: "",
        },
        image: {
          type: String,
          default: "",
        },
        imageType: {
          type: String,
          default: "image",
        },
      },

      cardGrid: {
      heading: {
        type: String,
        default: "Explore Our Services",
      },

      subheading: {
        type: String,
        default: "Our Collection",
      },

      whatsappCardTitle: {
        type: String,
        default: "",
      },
        whatsappCardPlaceholder: {
          type: String,
          default: "",
        },

        storytellingCardTitle: {
          type: String,
          default: "",
        },
        storytellingCardDescription: {
          type: String,
          default: "",
        },
        storytellingCardImage: {
          type: String,
          default: "",
        },
        storytellingCardImageType: {
          type: String,
          default: "image",
        },
        storytellingCardLearnMoreLink: {
          type: String,
          default: "",
        },

        expertCardTitle: {
          type: String,
          default: "",
        },
        expertCount: {
          type: String,
          default: "",
        },
        expertCardTagline: {
          type: String,
          default: "",
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

export default models.ServicesPage ||
  model("ServicesPage", ServicesPageSchema);