const { Product } = require('../models');

const getAll = () => Product.findAll();

module.exports = {
  getAll,
};