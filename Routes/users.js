const express = require('express');
const userRouter = express.Router();
const userContoller = require('../Controllers/users');


//Read - GET /products
userRouter.get('/users', userContoller.staticFileRender)

exports.routes = {userRouter};