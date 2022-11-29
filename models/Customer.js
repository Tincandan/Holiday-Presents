const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Customer extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail:true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                len:[6],
            },
        },
    },
    {
        hooks: {
          beforeCreate: async (newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
          },
          beforeUpdate: async (updatedUserData) => {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
          },
        },
    
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'customer',
    }
);

module.exports = Customer;