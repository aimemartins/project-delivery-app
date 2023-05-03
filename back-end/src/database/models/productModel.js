
const productModel = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'products',
  })

  return Product;
};

module.exports = productModel;