import mongoose, { Schema } from "mongoose";

const StorySchema = new Schema(
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

    coverImage: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      default: "Wedding",
    },

    location: String,

    date: String,

    description: String,

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Story ||
  mongoose.model("Story", StorySchema);