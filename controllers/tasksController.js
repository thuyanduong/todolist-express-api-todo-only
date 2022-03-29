const Task = require('../models/Task')

const getTasksAPI = async (req, res) => {
  try {
    const tasks = await Task.getTasks()
    res.status(200).json(tasks);
  } catch {
    res.sendStatus(500)
  }
}

const getTaskAPI = async (req, res) => {
  const id = req.params.id;
  try {
    const task = await Task.getTask(id);
    if(task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({message: "Task not found"})
    }
  } catch {
    res.sendStatus(500)
  }
}

module.exports = {
  getTaskAPI,
  getTasksAPI 
}