const express = require('express')
const app = express()

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

//Controllers/routes
 app.use('/api/user', require('./controllers/userController'))





module.exports = app;