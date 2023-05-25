const SaleProductService = require('../services/saleProductService');

const getAll = async (req, res, next) => {
  try {
    const salesProducts = await SaleProductService.getAll();

    return res.status(200).json(salesProducts);
  } catch (e) {
    next(e);
  }
};

const getSaleProductsId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const products = await SaleProductService.getSaleProductsId(id);
    return res.status(200).json(products);
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

const getProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await SaleProductService.getProducts(Number(id));
    return res.status(200).json(result);
  } catch (e) { 
    console.log(e.message);
    next(e);
  }
};
module.exports = {
  getSaleProductsId,
  getProducts,
  getAll,
  createSaleProduct,
};