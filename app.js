const express = require('express');
const productRouter = require('./app/product/routes');
const productRouterv2 = require('./app/product_v2/routes');
const app = express();
const path = require('path')
const logger = require('morgan')
const port = process.env.PORT || 3001;

app.use(logger('dev'));

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use('/public', express.static(path.join(__dirname, 'uploads')));

app.use('/api/v1', productRouter);

app.use('/api/v2', productRouterv2);

app.use((req, res, next) => {
    res.status(404);
    res.send(`
    <h2>Status: Failed</h2>
    <h2>Message: Resouce ${req.originalUrl} Not Found</h2>
    `);
})

app.listen(port, () => console.log(`server: http://localhost:${port}`))
