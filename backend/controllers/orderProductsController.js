const router = require('express').Router()
const ordersProductsModel = require('../models/orderProductsModel')

router.get('/:id', ordersProductsModel.getOrderProducts)

module.exports = router