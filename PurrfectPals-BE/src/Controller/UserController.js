import { User } from "../Model/User.js";

export async function updateUserProfile(req, res) {
  try {
    console.log(req.params.id)
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    const new_user = await User.findById(req.params.id);
    res.status(200).send(new_user);
  } catch (err) {
    res.status(500).send({ error: "Problem with Updating User recored " });
  }
}


export async function getUser(req, res) {
  try {
    const results = await User.find();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}