const mongoose = require('mongoose');

const DB = process.env.DATABASE; //used to extract or config(hidden data)

mongoose.connect(DB).then(()=>{
    console.log("connected !!");//it works as promises if it works then it reurns connected.
}).catch((err) => { console.log("Not connected !!") })