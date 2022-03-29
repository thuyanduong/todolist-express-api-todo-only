const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

router.get('/', usersController.getUsersAPI)

router.get('/:id', usersController.getUserAPI)

module.exports = router
