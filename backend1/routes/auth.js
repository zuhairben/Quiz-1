const bcrypt = require("bcrypt");
const Users = require("../model/User");
var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken")
const {body, validationResult} = require("express-validator");
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = "P0WER";

router.post("/signup", [
    //this is to check that the fields should not be left empty and if they are valid
    body('name', 'Enter a valid name').isLength({min: 3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({min: 5})
], async (req, res) => {
    //If there are errors, return the error and print the message
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    try{
    const {name, email, password, admin, recipe} = req.body;
    //This is to check whether the user has a unique email
    let user = await Users.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({error: 'This user already exists'})
    }
    //This is to provide the user details
    user = await Users.create({
        name,
        email,
        password: await bcrypt.hash(password, 5),
        admin,
        recipe        
    })
    res.json(user);

    }
    catch(error){
        console.error(error);
    }
});

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
  ], async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { email, password } = req.body;
    try {
      const user = await Users.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Please try to login with correct credentials" });
      }
  
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ error: "Please try to login with correct credentials" });
      }
  
      const tokenPayload = {
        email,    
        admin: user.admin,
        name: user.name
    };

    const token = jwt.sign(tokenPayload, "P0WER", { expiresIn: "1d" });

    res.json({
        msg: "Logged in", 
        token,
        name: user.name,
        admin: user.admin,
        recipe: user.recipe
    });
  
    } catch (error) {
      console.error(error);
    }
  
  
  });


  router.post('/fetchuser', fetchuser,  async (req, res) => {

    try {
      userId = req.user.id;
      const user = await Users.findById(userId).select("-password")
      res.send(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  });




module.exports = router