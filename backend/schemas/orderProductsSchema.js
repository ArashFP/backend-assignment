const mongoose = require('mongoose')

const orderProductSchema = new mongoose.Schema({
  product: { type:mongoose.Schema.Types.ObjectId ,ref: 'Products' },
  order: { type: mongoose.Schema.Types.ObjectId ,ref: 'Order'},
  quantity: { type: Number }
})

module.exports = mongoose.model('OrderProducts', orderProductSchema)