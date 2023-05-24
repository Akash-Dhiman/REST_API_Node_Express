const express = require('express');
const productRouter = express.Router();
const productController = require('../Controllers/products');


//Read - GET /products
productRouter.get('/products', productController.staticFileRender).get("/products/:id", productController.getUniqueProduct)
    .post("/products", productController.createProduct).put('/products/:id', productController.replaceProduct)
    .patch('/products/:id', productController.updateProduct).delete('/products/:id', productController.deleteProduct)


exports.routes = {productRouter};