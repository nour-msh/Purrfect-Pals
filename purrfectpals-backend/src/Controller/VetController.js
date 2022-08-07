import { Portfolio } from "../Model/Portfolio.js";
import { User } from "../Model/User.js";

export async function getVets(req, res) {
  try {
    const results = await User.find({ user_type: "1" });
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function addPortfolio(req, res) {
  try {
    const { vet_email, vet_number, vet_specialty, vet_story, vet_image,day,time, user_id } = req.body;
    const portfolio = new Portfolio({
      vet_email,
      vet_number,
      vet_specialty,
      vet_story,
      vet_image,
      day,
      time,
      user_id,
    });
    await portfolio.save();
    res.status(201).send(portfolio);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function getPortfolios(req, res) {
  try {
    console.log(req.params.id)
    const results = await Portfolio.find({ user_id: req.params.id });
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
