import mongoose, { Schema, models, model } from "mongoose";

const PortfolioSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    coverImage: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    seo: {
      metaTitle: {
        type: String,
        default: "",
      },
      metaDescription: {
        type: String,
        default: "",
      },
      canonicalUrl: {
        type: String,
        default: "",
      },
      keywords: {
        type: [String],
        default: [],
      },
    },

    gallery: [
  {
    image: {
      type: String,
      required: true,
    },

    public_id: {
      type: String,
      default: "",
    },
  },
],

    featured: {
      type: Boolean,
      default: false,
    },

    published: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Portfolio || model("Portfolio", PortfolioSchema);