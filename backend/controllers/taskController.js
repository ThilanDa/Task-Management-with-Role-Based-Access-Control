const Task = require('../models/taskModel');

// Create a new task
const createTask = async (req, res) => {
  const { title, description, assignedTo } = req.body;
  try {
    const task = await Task.create({ title, description, assignedTo, createdBy: req.user.id });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: 'Error creating task' });
  }
};

// Get tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ $or: [{ createdBy: req.user.id }, { assignedTo: req.user.id }] });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createTask,
  getTasks,
  deleteTask,
};


