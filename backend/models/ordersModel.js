const Order = require('../schemas/ordersSchema')

exports.placeOrder = async (req, res) => {
  try {
    
  const { user, products, totalPrice } = req.body
  //validation
  if(!user) {
    res.status(400)
    throw new Error ('You have to log in to make an order!')
  }
  // if(!products || products <= 0) {
  //   res.status(400)
  //   throw new Error ('You must insert products before placing an order')
  // }
  if(!totalPrice) {
    res.status(400)
    throw new Error ('An order must have a total price')
  }

  //create the order
  const order = await Order.create({ user, products, totalPrice })
  res.status(201).json(order)


  } catch (err) {
    res.json({
      message: err.message
    })
  }
}

