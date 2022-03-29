const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController')

router.get('/:id', tasksController.getTaskAPI)

router.put('/:id', tasksController.updateTaskAPI)

router.get('/', tasksController.getTasksAPI)

router.post('/', tasksController.createTaskAPI)

router.delete('/:id', tasksController.deleteTaskAPI)

router.patch('/:id/complete', tasksController.markCompleteAPI)

module.exports = router