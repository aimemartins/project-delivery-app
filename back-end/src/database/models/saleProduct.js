const SaleProductModel = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      field: 'sale_id',
      primaryKey: true,
      references: {
        model: 'sales',
        key: 'id'
      },

    },
    productId: {
      type: DataTypes.INTEGER,
      field: 'product_id',
      primaryKey: true,
      references: {
        model: 'products',
        key: 'id'
      },
    },

    quantity: {
      type: DataTypes.INTEGER,
    }
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'sales_products',
  });

  SaleProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  };

  return SaleProduct;
};

module.exports = SaleProductModel;