import mongoose, { Schema, models, model } from "mongoose";

const ServiceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },

    seoTitle: {
      type: String,
      default: "",
      trim: true,
    },

    metaDescription: {
      type: String,
      default: "",
      trim: true,
    },

    canonicalUrl: {
      type: String,
      default: "",
      trim: true,
    },

    primaryKeyword: {
      type: String,
      default: "",
      trim: true,
    },

    secondaryKeywords: {
      type: [String],
      default: [],
    },

    aiSummary: {
      type: String,
      default: "",
    },

    searchIntent: {
      type: String,
      default: "",
    },

    city: {
      type: String,
      default: "Madurai",
    },

    state: {
      type: String,
      default: "Tamil Nadu",
    },

    country: {
      type: String,
      default: "India",
    },

    ogTitle: {
      type: String,
      default: "",
    },

    ogDescription: {
      type: String,
      default: "",
    },

    ogImage: {
      type: String,
      default: "",
    },

    twitterTitle: {
      type: String,
      default: "",
    },

    twitterDescription: {
      type: String,
      default: "",
    },

    twitterImage: {
      type: String,
      default: "",
    },

    schemaType: {
      type: String,
      default: "Service",
    },

    description: {
      type: String,
      default: "",
    },

    shortDescription: {
      type: String,
      default: "",
    },

    coverImage: {
      type: String,
      default: "",
    },

    coverImageType: {
      type: String,
      default: "image",
    },

    images: {
      type: [String],
      default: [],
    },

    price: {
      type: String,
      default: "",
    },

    features: {
      type: [String],
      default: [],
    },

    icon: {
      type: String,
      default: "",
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    sortOrder: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
  
);

export default models.Service || model("Service", ServiceSchema);