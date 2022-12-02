const { Product } = require('../models');

const productData = [
    // Thanksgiving
  {
    product_name: 'wire pumpkin halloween decor',
    product_price: 4.00,
    product_stock: 20,
    category_id: 2,
  },
  {
    product_name: '5ft fall leaf garland',
    product_price: 4.00,
    product_stock: 25,
    category_id: 2,
  },
  {
    product_name: 'hello fall wall sign 10in x 10in',
    product_price: 4.00,
    product_stock: 12,
    category_id: 2,
  },
  {
    product_name: '31in fall porch board - hello pumpkin',
    product_price: 2.50,
    product_stock: 50,
    category_id: 2,
  },
  {
    product_name: '6ft hello fall banner',
    product_price: 3.00,
    product_stock: 22,
    category_id: 2,
  },
  {
    product_name: 'matching pet & owner fall beanie hats set - pumpkin spice',
    product_price: 5.00,
    product_stock: 22,
    category_id: 2,
  },
  // Christmas
  {
    product_name: 'ladies 12 days of socks holiday gift set',
    product_price: 5.00,
    product_stock: 20,
    category_id: 1,
  },
  {
    product_name: 'oreo® cookie dunk mug set',
    product_price: 5.00,
    product_stock: 25,
    category_id: 1,
  },
  {
    product_name: 'grand ferrero rocher® chocolate & hazelnut candy',
    product_price: 5.00,
    product_stock: 12,
    category_id: 1,
  },
  {
    product_name: 'hot chocolate bomb with mini marshmallows 1.6oz',
    product_price: 3.00,
    product_stock: 50,
    category_id: 1,
  },
  {
    product_name: '3ft inflatable christmas ornament',
    product_price: 10.00,
    product_stock: 22,
    category_id: 1,
  },
  {
    product_name: 'hershey® build your own chocolate cookie house kit',
    product_price: 5.00,
    product_stock: 22,
    category_id: 1,
  },
  //Misc
  {
    product_name: 'Small American Flag',
    product_price: 1.30,
    product_stock: 20,
    category_id: 4,
  },
  {
    product_name: 'Glitter Patriotic Fireworks Centerpiece',
    product_price: 7.00,
    product_stock: 25,
    category_id: 3,
  },
  {
    product_name: 'Medium Patriotic American Flag Bunting',
    product_price: 5.00,
    product_stock: 12,
    category_id: 3,
  },
  {
    product_name: 'hot chocolate bomb with mini marshmallows 1.6oz',
    product_price: 3.00,
    product_stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Small Patriotic American Flag Bow',
    product_price: 2.00,
    product_stock: 22,
    category_id: 3,
  },
  {
    product_name: 'Patriotic American Flag Flannel-Backed Vinyl Tablecloth',
    product_price: 5.00,
    product_stock: 22,
    category_id: 3,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;