const express = require('express');
const router = express.Router();
const User = require('../models/User');


const { body, validationResult } = require('express-validator');


// Create a user without Auth using Post /api/auth/createUser 
router.post('/createUser',[
      body('name','Ennter a valid name').isLength({ min: 3 }),
      body('email').isEmail(),
      body('password').isLength({ min: 6 }),
], async (req, res) => {
      // if there are errors return bad request and the errors 
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
try {
      

      // check weather the user email exists already
      let user = await User.findOne({email:req.body.email});
      if(user){
            return res.status(400).json({error:"A user with this email already exists !"});
      }
       user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
          })
          
            // .then(user => res.json(user))
            // .catch(err => {console.log(err)
                  // res.json({error: "Email already taken..", message:err.message
            // })
      // })

      res.json(user);
} catch (error) {
      console.log(error.message);
      res.status(500).send("Some error occured !");
}
})
      


module.exports = router