import mongoose, { Schema, models, model } from "mongoose";

const FilmsSchema = new Schema(
  {
    settings: {
      hero: {
        heading: { type: String, default: "" },
        subheading: { type: String, default: "" },
        paragraph: { type: String, default: "" },
      },

      featuredFilm: {
        title: { type: String, default: "" },
        category: { type: String, default: "" },
        thumbnail: { type: String, default: "" },
        thumbnailMediaType: {
          type: String,
          default: "image",
        },
        videoUrl: { type: String, default: "" },
      },

      recentFilms: {
        type: [
          {
            title: { type: String, default: "" },
            category: { type: String, default: "" },
            thumbnail: { type: String, default: "" },
            thumbnailMediaType: {
              type: String,
              default: "image",
            },
            videoUrl: { type: String, default: "" },
          },
        ],
        default: [],
      },
    },
  },
  {
    timestamps: true,
  }
);

export default models.Films || model("Films", FilmsSchema);