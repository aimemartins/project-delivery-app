const express = require('express');
const cors = require('cors');
const {
  UserController,
  SaleController,
  ProductController,
  SaleProductController } = require('../database/controller');
const ErrorHandler = require('../database/middlewares/ErrorHandler');
const verifyToken = require('../database/middlewares/verifyToken');

// const accessControl = (_req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
//   res.header('Access-Control-Allow-Headers', '*');
//   next();
// };

const app = express();
app.use(express.json());
app.use(cors());
app.options('*', cors());
app.use('/images', express.static('public'));

app.get('/coffee', (_req, res) => res.status(418).end());

app.get('/users', UserController.getAll);
app.post('/users', UserController.createUser);
app.post('/admin/user', verifyToken, UserController.createUser);
app.delete('/users/:id', verifyToken, UserController.deleteUser);
app.post('/login', UserController.login);

app.get('/sales', SaleController.getAll);
app.get('/sales/:id', SaleController.getAllById);
app.post('/sales', SaleController.createSale);
app.patch('/sales/:id', SaleController.updateSale);

app.get('/products', ProductController.getAll);
app.get('/products/:id', ProductController.getById);

app.get('/sales/products', SaleProductController.getAll);
app.get('/sale/products/:id', SaleProductController.getSaleProductsId);
app.post('/sales/products', SaleProductController.createSaleProduct);

app.get('/saller/orders', SaleController.getAll);

app.get('/sales/seller/:id', SaleController.getSellerId);

app.get('/customer/orders/:id', SaleController.getSaleOrderById);

app.use(ErrorHandler.handle);
module.exports = app;
