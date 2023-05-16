const SaleModel = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },

    sellerId: {
      type: DataTypes.INTEGER,
      field: 'seller_id',
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'

    },

    totalPrice: {
      type: DataTypes.DECIMAL,
      field: 'total_price'
    },

    deliveryAddress: {
      type: DataTypes.STRING,
      field: 'delivery_address'
    },

    deliveryNumber: {
      type: DataTypes.STRING,
      field: 'delivery_number'
    },

    saleDate: {
      type: DataTypes.DATE,
      field: 'sale_date',
      defaultValue: DataTypes.NOW
    },

    status: DataTypes.STRING


  }, {
    timestamps: false,
    underscored: true,
    tableName: 'sales',
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    })

    Sale.belongsTo(models.User, {
      foreignKey: 'sellerId',
      as: 'seller'
    });

  };

  return Sale;
};

module.exports = SaleModel;