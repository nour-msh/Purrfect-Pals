import { Post } from "../Model/Post.js";

export async function addPost(req, res) {
  try {
    const { pet_name, duration, description, image } = req.body;
    const post = new Post({
      pet_name,
      image,
      duration,
      description,
    });
    await post.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function getPosts(req, res) {
  try {
    const results = await Post.find();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
