const router = require('express').Router()
const productModel = require('../models/productModel')

router.post('/', productModel.createProduct)
router.get('/all', productModel.getAllProducts)
router.get('/:id', productModel.getOneProduct)
router.patch('/:id', productModel.updateOneProduct)
router.delete('/:id', productModel.deleteProduct)

module.exports = router