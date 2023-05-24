const express = require('express');
const productRouter = express.Router();
const productController = require('../Controllers/products');
const userContoller = require('../Controllers/users');


//Read - GET /products
productRouter.get('/products', productController.staticFileRender).get("/products/:id", productController.getUniqueProduct)
    .post("/products", productController.createProduct).put('/products/:id', productController.replaceProduct)
    .patch('/products/:id', productController.updateProduct).delete('/products/:id', productController.deleteProduct)
   .get('/users', userContoller.getAllUser)

exports.routes = {productRouter, userContoller};