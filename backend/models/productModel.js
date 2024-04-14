const Product = require('../schemas/productSchemas')

exports.createProduct = async (req, res) => {
  try {
    
    const { name, price, description, category, images } = req.body
    if( !name || !price || !description || !category || !images ){
      res.status(400)
      throw new Error('You need to enter all the product fields')
    }

    const product = await Product.create({ name , price, description , category , images })
    res.status(201).json(product)


  } catch (err) {
    res.json({
      message: err.message
    })
  }
}

exports.getAllProducts = async ( req , res ) => {

  try {
    
    const filter = {}
    
    const allProducts = await Product.find(filter)
    res.status(200).json(allProducts)
    
  } catch (err) {
    res.json({
      message: err.message
    })
  }
}

exports.getOneProduct = async ( req, res ) => {
  try {
    
    //get product _id from the get requests URL
    const { product_id } = req.params
    const oneProduct = await Product.findById(product_id)
    res.status(200).json(oneProduct)

  } catch (err) {
    res.json({
      message: err.message
    })
  }
}

exports.updateOneProduct = async ( req, res ) => {
  try {
    
    const { id } = req.params
    const newData = req.body

    const updateProduct = await Product.findByIdAndUpdate( id , newData, { new : true } )
    res.status(200).json(updateProduct)

  } catch (err) {
    res.json({
      message: err.message
    })
  }
}

exports.deleteProduct = async ( req, res) => {
  try {
    
    const { id } = req.params 
    
    const removeProduct = await Product.findByIdAndDelete( id )
    res.status(200).json(removeProduct)

  } catch (err) {
    res.json({ 
      message: err.message
    })
  }
}