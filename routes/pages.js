const express = require("express");

const router = express.Router();

const tokens = require("./src/verifyToken");

const controllers = require("./src/controllers");

router.get('/login',(req,res)=>{
    res.render('login')
});
