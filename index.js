const express = require('express');
const server = express();
const router = require('./Routes/products')
const userRouter = require('./Routes/users')

// It Will To Parse The Body Data.
server.use(express.json());

// Static Hosting.
server.use(express.static('public'));

// Router Configuration As A Middleware.
server.use('/products/v1', router.routes.productRouter);
server.use('/users/v1', userRouter.routes.userRouter);

server.listen(8080, () => {
    console.log("Listen");
});
