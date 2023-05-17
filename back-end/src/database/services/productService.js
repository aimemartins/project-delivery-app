const { Product } = require('../models');

const getAll = () => Product.findAll();
const getById = (id) => Product.findOne({ where: { id } });

module.exports = {
  getAll,
  getById,
};