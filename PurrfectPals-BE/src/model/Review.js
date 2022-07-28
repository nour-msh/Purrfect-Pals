import mongoose from "../Database/database.js";
const reviewSchema = new mongoose.Schema({
  content: {
    type: String,
  },
  pet_id: {
    type: mongoose.Types.ObjectId,
    ref: "Pet",
  },
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

export const Review = mongoose.model("Review", reviewSchema);
