const express = require('express');
const server = express();
const router = require('./Routes/products')

// It Will To Parse The Body Data.
server.use(express.json());

// Static Hosting.
server.use(express.static('public'));

// Router Configuration As A Middleware.
server.use('/products/v1', router.routes.productRouter);
server.use('/users/v1', router.routes.productRouter);

server.listen(8080, () => {
    console.log("Listen");
});
