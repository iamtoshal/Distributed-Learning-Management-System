const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get('/',(req,res) => {
    res.send("Hello !!");
});

router.post('/register', async (req,res)=>{

    const {email, password} = req.body; //array destructuring ES6
    console.log(email);
    if (!email || !password) {
        res.status(422).json({
            error : "Not filled !!"
        });
        //422 is used for mistakes made by client
    }

    try {
        const userFinding = await User.findOne({email:email});
        if(userFinding){
            return res.status(422).json({
                error : "Email already registered !!"
            });
        }
        const user = new User({email,password});
        const register = await user.save();
        if(register){
            res.status(201).json({
                message : "user registered successfully !!"
            });
        }
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;