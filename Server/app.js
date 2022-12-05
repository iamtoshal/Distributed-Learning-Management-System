const dotenv = require('dotenv');//package to hide your password 
const express = require('express');
const app = express();
const mongoose = require('mongoose');

dotenv.config({path:'./config.env'});
require('./db/conn');
const User = require('./model/userSchema');

app.use(express.json()); //it will convert all json files
app.use(require('./router/rout'));
const PORT = process.env.PORT; //used to extract or config(hidden data)

//middleware = it checks whether the user has logged in correctly or not
const middleWare = (res,req,next) => {
    console.log("middleware !!");
    next(); //redirect to next page
}


app.get('/home',middleWare,(req,res) => {
    res.send("Lets show the content !!");
})

app.listen(PORT,()=>{
    console.log("On, 3000 !!");
})