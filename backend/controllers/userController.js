const router = require('express').Router()
const userModel = require('../models/userModel.js')

router.post('/', userModel.addUser)

module.exports = router