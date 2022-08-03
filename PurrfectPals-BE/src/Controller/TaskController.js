import { Task } from "../Model/Task";

export async function addTask(req, res) {
    try {
      const { todo } = req.body;
      const task = new Task({
        todo
      });
      await task.save();
      res.status(201).send(post);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }