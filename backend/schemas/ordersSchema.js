const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema ({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  totalPrice: { type: Number, required: true },
  products: [ 
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
      }
    },
    {
      quantity: {
        type: Number,
        required: true,
      }
    }
   ]      
})

module.exports = mongoose.model('Order', orderSchema)

// -----------------------------

// const orderSchema = new Schema({
//   user: {
//     type: Schema.Types.ObjectId,
//     required: true,
//     ref: 'User',
//   },
//   products: [
//     {
//       productId: {
//         type: Schema.Types.ObjectId,
//         required: true,
//         ref: 'Product',
//       },
//       quantity: {
//         type: Number,
//         required: true,
//       },
//     },
//   ],
// }, { timestamps: true })

// const Order = model ('Order', orderSchema);

// export default Order;