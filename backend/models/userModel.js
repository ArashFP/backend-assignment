const User = require('../schemas/userSchema.js')


//Func that adds a user
exports.addUser = async (req, res) => {
  try {
    
    //retrieve email and password from the body of the request
    const { email, password } = req.body
    //if no email or password, send status error 400 and string error to enter all inputs.
    if(!email || !password ){
      res.status(400)
      throw new Error('Please enter all the input fields!')
    }

    //create new user with email and password
    const user = await User.create({ email, password })
    //set status response to 201 (created) and send response as json 
    res.status(201).json(user)

  } catch (error) {
    res.json({
      message:  error.message
    })
  }
}