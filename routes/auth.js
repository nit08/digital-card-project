const express = require("express");
const router = express.Router();
const controllers= require('/src/controllers')

router.post('/login',controllers.login);