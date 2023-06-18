const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');

const JWT_TOKEN= "iNotebookisagreatapp";

//Route 1: Create a User POST no login required api/auth/createUser
router.post(
  "/createUser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    //If there are errors, return Bad request and the errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Check whether the user with this email exists already
    try{
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res
                .status(400)
                .json({ error: "Sorry a user with this email already exists" });
        }
        //Create a new user using User.create
        const salt  = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
          name: req.body.name,
          password: secPass,
          email: req.body.email,
        });
        const data = {
            user: {
                id: user.id,
            }
        }
        const authToken = await jwt.sign(data, JWT_TOKEN);
        console.log(authToken);
        res.json({authToken});
    }
    //Check for unexpected errors
    catch(error){
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
  }
);
// Route 1:Authenticate the user api/auth/login
router.post('/login', [ 
  body('email', 'Enter a valid email').isEmail(), 
  body('password', 'Password cannot be blank').exists(), 
], async (req, res) => {

  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email, password} = req.body;
  try {
    let user = await User.findOne({email});
    if(!user){
      return res.status(400).json({error: "Please try to login with correct credentials"});
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare){
      return res.status(400).json({error: "Please try to login with correct credentials"});
    }

    const data = {
      user:{
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_TOKEN);
    res.json({authtoken})

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Route 3: Get loggedin User Details api/auth/getUser. Login required
router.post('/getUser', fetchUser, async(req, res) => {
  try{
    let userID = req.user.id;
    let user = await User.findById(userID).select("-password");
    res.send(user);
  }catch(error){
    console.error(error.message);
    res.status(500).send("Internal Server Error");    
  }
});

module.exports = router;
