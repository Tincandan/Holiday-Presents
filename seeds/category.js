const { Category } = require('../models');

const categoryData = [
  {
    category_name: ' Christmas',
  },
  {
    category_name: 'Thanksgiving',
  },
  {
    category_name: 'Independence Day',
  },
  {
    category_name: 'Memorial Day',
  },
  {
    category_name: 'New Years Day',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;