import { Task } from "../Model/Task.js";

export async function addTask(req, res) {
    try {
      const { todo } = req.body;
      const task = new Task({
        todo
      });
      await task.save();
      res.status(201).send(task);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }