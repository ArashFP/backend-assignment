const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {type: String},
  price: {type: Number},
  description:{type: String},
  category: { type: String},
  images: [
    {
      type: String,
    }
  ]
})

module.exports = mongoose.model('Products', productSchema)