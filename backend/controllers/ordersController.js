const router = require('express').Router()
const ordersModel = require('../models/ordersModel')


router.post('/:id', ordersModel.placeOrder)




module.exports = router