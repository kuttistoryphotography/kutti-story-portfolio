import mongoose, { Schema } from "mongoose";

const TestimonialSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      default: "",
    },

    review: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    rating: {
      type: Number,
      default: 5,
    },

    featured: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);