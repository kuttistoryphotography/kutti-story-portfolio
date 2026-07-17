import mongoose, { Schema, models, model } from "mongoose";

const AboutSchema = new Schema(
  {
    settings: {
      hero: {
        heading: { type: String, default: "" },
        subheading: { type: String, default: "" },
        paragraph: { type: String, default: "" },
        highlightWord: { type: String, default: "" },

        images: {
          type: [String],
          default: ["", "", "", ""],
        },

        profileImage: { type: String, default: "" },
        profileName: { type: String, default: "" },
        profileRole: { type: String, default: "" },
      },

      story: {
        heading: { type: String, default: "" },
        paragraph: { type: String, default: "" },
        image: { type: String, default: "" },
        videoUrl: { type: String, default: "" },
      },

      // ⭐ NEW
      stats: {
        weddings: {
          number: { type: String, default: "500+" },
          label: { type: String, default: "Weddings" },
        },

        experience: {
          number: { type: String, default: "8+" },
          label: { type: String, default: "Years Experience" },
        },

        passion: {
          number: { type: String, default: "100%" },
          label: { type: String, default: "Passion" },
        },

        memories: {
          number: { type: String, default: "∞" },
          label: { type: String, default: "Memories" },
        },
      },

      team: {
        type: Array,
        default: [],
      },

      timeline: {
        type: Array,
        default: [],
      },
    },
  },
  {
    timestamps: true,
  }
);

export default models.About || model("About", AboutSchema);