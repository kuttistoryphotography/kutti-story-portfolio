import mongoose, { Schema } from "mongoose";

const CommentSchema = new Schema(
  {
    storyId: {
      type: Schema.Types.ObjectId,
      ref: "Story",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: String,
    comment: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 5,
    },

    approved: {
      type: Boolean,
      default: false,
    },

  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Comment ||
  mongoose.model("Comment", CommentSchema);