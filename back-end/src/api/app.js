const express = require('express');
const {
  UserController,
  SaleController,
  ProductController,
  SaleProductController } = require('../database/controller');
const ErrorHandler = require('../database/middlewares/ErrorHandler');

const app = express();
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.get('/users', UserController.getAll);
app.post('/users', UserController.createUser);

app.get('/sales', SaleController.getAll);
app.post('/sales', SaleController.createSale);
app.put('/sales/:id', SaleController.updateSale);

app.get('/products', ProductController.getAll);

app.get('/sales/products', SaleProductController.getAll);
app.post('/sales/products', SaleProductController.createSaleProduct);

app.use(ErrorHandler.handle);
module.exports = app;
