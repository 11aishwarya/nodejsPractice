const express = require('express');
const { signup } = require('../controller/authController');
const router = express.Router()


// router.get('/checkApi',(req,res) =>{
//     res.send("i'm testing this api");
// })

router.post('/signup' , signup);

module.exports = router;