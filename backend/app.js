const express = require('express')
const app = express()

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

//Controllers/routes
  app.use('/api/user', require('./controllers/userController'))
  app.use('/api/product', require('./controllers/productController'))
  app.use('/api/message', require('./controllers/messageController'))


  
  // app.use('/api/orderProducts', require('./controllers/orderProductsController'))
  // app.use('/api/order', require('./controllers/ordersController'))





module.exports = app;