const { Sale, User } = require('../models');
const schema = require('./validations/validateSchemas');

const getAll = () => Sale.findAll();

const getSaleById = (id) => Sale.findOne({
  where: { id },
  include: [{
    model: User,
    as: 'user',
    attributes: { exclude: ['password'] },
  }],
});

const createSale = async (obj) => {
  const error = schema.validateSale(obj);
  if (error) throw new Error(error.message);

  const newSale = await Sale.create(obj);
  return newSale;
};

const getSellerSale = async (sellerId) => Sale.findAll({
  where: { sellerId },
});

const getCustomerSale = async (userId) => Sale.findAll({
  where: { userId },
});

const updateSaleStatus = (id, status) => Sale
  .update({ status }, { where: { id } });

const deleteSale = (id) => Sale.destroy({ where: { id } });

module.exports = {
  getCustomerSale,
  getSellerSale,
  getAll,
  createSale,
  updateSaleStatus,
  deleteSale,
  getSaleById,
};