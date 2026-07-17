import { Schema, model, models } from "mongoose";

const GallerySchema = new Schema(
  {
    storyId: {
      type: Schema.Types.ObjectId,
      ref: "Story",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },

    public_id: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      default: "Wedding",
    },

    featured: {
      type: Boolean,
      default: false,
    },

    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Gallery || model("Gallery", GallerySchema);