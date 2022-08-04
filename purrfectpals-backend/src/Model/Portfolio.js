import mongoose from "../Database/database.js";

const portfolioSchema = new mongoose.Schema({
  vet_email: {
    type: String,
  },
  vet_number: {
    type: Number,
  },
  vet_specialty: {
    type: String,
  },
  vet_story: {
    type: String,
  },
  vet_image: {
    type: String,
  },
  user_id: {
    // type: mongoose.Types.ObjectId,
    // ref: "User",
    type: String,
  },
});

export const Portfolio = mongoose.model("Portfolio", portfolioSchema);
