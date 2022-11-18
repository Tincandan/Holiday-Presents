const Customer = require('./Customer');
const Category = require('./Category');
const Cart = require('./Cart');
const Product = require('./Product');

/*Category.hasMany(Product, {
    foreignKey: ''
});

Product.belongsTo(Category, {
    foreignKey: ''
}); */

module.exports = { Customer, Category, Cart, Product };