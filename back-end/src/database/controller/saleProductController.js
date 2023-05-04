const SaleProductService = require('../services/saleProductService');

const getAll = async (req, res, next) => {
  try {
    const salesProducts = await SaleProductService.getAll();

    return res.status(200).json(salesProducts);
  } catch (e) {
    next(e);
  }
};

const createSaleProduct = async (req, res, next) => {
  try {
    const { saleId, productId, quantity } = req.body;

    const newSaleProduct = await SaleProductService.createSaleProduct(saleId, productId, quantity);
    return res.status(201).json(newSaleProduct);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAll,
  createSaleProduct,
};