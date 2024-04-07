const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config()

//Connection constants
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 1994;


app.listen(PORT, () => console.log('server running on http://localhost:' + PORT))

//Func that tries to connect to mongoDB
const connectDB = async () => {
  try {
    if(!MONGO_URI) throw new Error('No connectiong string found in .env')
    
    await mongoose.connect(MONGO_URI)
    console.log('Established connection with mongoDB')

  } catch (error) {     //Catch any errors during connection and terminate the process after logging the message.
    console.log(error.message)
    process.exit(1)
  }
}
//run func connectDB
connectDB()