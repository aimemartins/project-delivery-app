'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'seller_id',
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      totalPrice: {
        type: Sequelize.DECIMAL(9, 2),
        allowNull: false,
        field: 'total_price',
      },

      deliveryAddress: {
        type: Sequelize.STRING(100),
        allowNull: false,
        field: 'delivery_address'
      },

      deliveryNumber: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: 'delivery_number'
      },

      saleDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'sale_date',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },

      status: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },

    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');

  }
};
