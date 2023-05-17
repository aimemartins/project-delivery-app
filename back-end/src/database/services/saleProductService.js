const { SaleProduct, Sale, Product, User } = require('../models');

const getAll = () => SaleProduct.findAll();

const createSaleProduct = async (saleId, productId, quantity) => {
  const sale = await Sale.findOne({ where: { id: saleId } });
  if (!sale) throw new Error('Sale does not exist');

  const product = await Product.findOne({ where: { id: productId } });
  if (!product) throw new Error('Product does not exist');

  const saleProduct = await SaleProduct.create({ saleId, productId, quantity });
  return saleProduct;
};

const getProducts = (id) => Sale.findAll({ 
  where: { id },
  include: [{
    model: User,
    as: 'seller',
    attributes: { exclude: ['password', 'id', 'email', 'role'] },
  }, {
    model: Product,
    as: 'products',
    through: { attributes: ['quantity'] },
  }],
});

module.exports = {
  getAll,
  createSaleProduct,
  getProducts,
};