const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController')

router.get('/', tasksController.getTasksAPI)

router.get('/:id', tasksController.getTaskAPI)

router.post('/', tasksController.createTaskAPI)

router.patch('/:id/complete', tasksController.markCompleteAPI)

router.put('/:id', tasksController.updateTaskAPI)

router.delete('/:id', tasksController.deleteTaskAPI)

module.exports = router