const express = require("express");
const authRouter = require("./router/authRouter");
const authModel = require("./model/authModel");
const mongoose = require("mongoose");
const colors = require("colors");

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://sanhil143:raisahab12345@sanhildb.kk3knyj.mongodb.net/loginSignUp-aashi")
     .then(() => console.log("MY DB is Connected".blue.underline.bold))
     .catch((err) => console.error(err))

app.use('/',authRouter);

app.listen(4000, () =>{
    console.log("Express App Running on port 4000 ".rainbow.underline.bold);
})