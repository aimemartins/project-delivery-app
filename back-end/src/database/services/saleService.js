const { Sale, User, SaleProduct } = require('../models');
const schema = require('./validations/validateSchemas');

const getAll = () => Sale.findAll();

const getAllById = async (id) => Sale.findOne({ where: { id } });

const getSellerId = async (sellerId) => Sale.findAll({ where: { sellerId } });

const getSaleById = (id) => Sale.findOne({
  where: { id },
  include: [{
    model: User,
    as: 'user',
    attributes: { exclude: ['password'] },
  }],
});

const createSale = async (obj) => {
  const post = {
    userId: obj.userId,
    sellerId: obj.sellerId,
    totalPrice: obj.totalPrice,
    deliveryAddress: obj.deliveryAddress,
    deliveryNumber: obj.deliveryNumber,
    status: obj.status,
  };
  const error = schema.validateSale(post);
  if (error) throw new Error(error.message);
  const newSale = await Sale.create(post);

  const saleProductArray = obj.cart.map((e) => ({
       saleId: newSale.id,
       productId: e.id,
       quantity: e.quantity,
    }));
    await SaleProduct.bulkCreate(saleProductArray);
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
  getSellerId,
  getAll,
  createSale,
  updateSaleStatus,
  deleteSale,
  getSaleById,
  getAllById,
};