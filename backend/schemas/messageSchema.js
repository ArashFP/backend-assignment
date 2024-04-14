const mongoose = require('mongoose');
//Destructure of Schema from mongoose so line 5 doesnt require mongoose.Schema
const { Schema } = mongoose;

const messageSchema = new Schema ({

  name: { type: String },
  email: String,
  message: String


})

module.exports = mongoose.model('Message', messageSchema)