const Message = require('../schemas/messageSchema.js')

exports.sendMessage = async ( req, res ) => {
  try {
    
    //Destructure of name, email and message from the request body from postman
    const { name, email, message } = req.body

    //validate the input
    if( !message || !email || !name ) {
      res.status(400)
      throw new Error ('you must enter all the input fields')
    }
    //create new variable sendMessage based on schema inputs: name, email, message
    const sendMessage = await Message.create({ name, email, message })
2
    //Send created status(201) and convert to sendMessage to JSON
    res.status(201).json(sendMessage)

  } catch (err) {
    res.json({
      message: err.message
    })
  }
}