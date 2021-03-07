const express = require('express')
const router = express.Router()
const userController = require('../controller/user')

router
    .get('/', userController.getUser)
    .get('/:id', userController.getUserById)
    .post('/', userController.insertUser)
    .put('/:id', userController.updateUser)
    .delete('/:id', userController.deleteUser)

module.exports = router