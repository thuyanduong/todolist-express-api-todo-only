const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController')

router.get('/:id', tasksController.getTaskAPI)

router.get('/', tasksController.getTasksAPI)


module.exports = router