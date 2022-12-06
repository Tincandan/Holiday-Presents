const Customer = require('./Customer');
const Category = require('./Category');
const Cart = require('./Cart');
const Product = require('./Product');

Category.hasMany(Product, {
    foreignKey: 'category_id',
});

Product.belongsTo(Category, {
    foreignKey: 'category_id',
});

module.exports = { Customer, Category, Cart, Product };
