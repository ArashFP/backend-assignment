const orderProducts = require('../schemas/orderProductsSchema')

exports.getOrderProducts = async (req, res) => {

  try {

    const { productId, quantity } = req.products

    if(!productId){
      res.status(400)
      throw new Error ('Your items doesn´t contain a productId')
    }
    if(!quantity){
      res.status(400)
      throw new Error ('Your items dont have a quantity')
    }
    
    const order = await orderProducts.create({ product, order, quantity })
    set.status(201).json(order)

  } catch (err) {
    res.json({
      message: err.message
    })
  }




}