const SaleService = require('../services/saleService');

const getAll = async (_req, res, next) => {
  try {
    const users = await SaleService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    next(e);
  }
};

const getSaleOrderById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const orderId = await SaleService.getSaleById(id);
    return res.status(200).json(orderId);
  } catch (e) {
    next(e);
  }
};

const createSale = async (req, res, next) => {
  try {
    const saleObj = req.body;
    const newSale = await SaleService.createSale(saleObj);
    return res.status(201).json(newSale);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
};

const updateSale = async (req, res, next) => {
  try {
    const { status } = req.body;
    const { id } = req.params;
    await SaleService.updateSaleStatus(Number(id), status);

    const sale = await SaleService.getSaleById(Number(id));
    return res.status(202).json(sale);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
};

const getCustomerSale = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sales = await SaleService.getCustomerSale(Number(id));
    return res.status(200).json(sales);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
};

const getSellerSale = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sales = await SaleService.getSellerSale(Number(id));
    return res.status(200).json(sales);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
};

const getSellerId = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await SaleService.getSellerId(Number(id));
    console.log(result);
    return res.status(200).json(result);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const getSaleAndProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await SaleService.getSaleAndProducts(Number(id));
    return res.status(200).json(result);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const getAllById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sales = await SaleService.getAllById(Number(id));
    return res.status(200).json(sales);
  } catch (e) {
    next(e);
}
};

module.exports = {
  getSaleOrderById,
  getAllById,
  getSaleAndProducts,
  getSellerSale,
  getCustomerSale,
  getSellerId,
  getAll,
  createSale,
  updateSale,
};