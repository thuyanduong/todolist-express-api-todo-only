const Task = require('../models/Task')

const updateTaskAPI = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.updateTask(id, req.body.title, req.body.description)
    if(task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({message: "Task not found"})
    }
  } catch {
    res.sendStatus(500)
  }
}

const deleteTaskAPI = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.deleteTask(id)
    if(task) {
      res.status(204).end();
    } else {
      res.status(404).json({message: "Task not found"})
    }
  } catch {
    res.sendStatus(500)
  }
}

const markCompleteAPI = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.markComplete(id)
    if(task){
      res.status(200).json(task);
    } else {
      res.status(404).json({message: "Task not found"})
    }
  } catch {
    res.sendStatus(500)
  }
}

const createTaskAPI = async (req, res) => {
  try {
    const newTask = await Task.createTask(req.body.title, req.body.description)
    res.status(201).json(newTask)
  } catch {
    res.sendStatus(500)
  }
}

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
  getTasksAPI,
  updateTaskAPI,
  createTaskAPI,
  deleteTaskAPI,
  markCompleteAPI
}