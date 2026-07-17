import mongoose, { Schema, models, model } from "mongoose";

const FaqSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },

    answer: {
      type: String,
      required: true,
      default: "",
    },

    category: {
      type: String,
      default: "General",
      trim: true,
    },

    displayOrder: {
      type: Number,
      default: 0,
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

export default models.Faq || model("Faq", FaqSchema);