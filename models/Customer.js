const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Customer extends Model {}

Customer.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contact_add: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'customer',
    }
);

module.exports = Customer;