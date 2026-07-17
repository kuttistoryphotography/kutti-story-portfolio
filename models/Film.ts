import mongoose, { Schema, models, model } from "mongoose";

const FilmSchema = new Schema(
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

    category: {
      type: String,
      default: "Wedding Film",
    },

    thumbnail: {
      type: String,
      default: "",
    },

    videoUrl: {
      type: String,
      default: "",
    },

    duration: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    featured: {
      type: Boolean,
      default: true,
    },

    sortOrder: {
      type: Number,
      default: 1,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Film || model("Film", FilmSchema);