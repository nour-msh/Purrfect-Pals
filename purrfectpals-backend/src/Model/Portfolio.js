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
  day: {
    type: String,
  },
  time: [
    {
      type: String,
    },
  ],
  user_id: {
    type: String,
  },
});

export const Portfolio = mongoose.model("Portfolio", portfolioSchema);
