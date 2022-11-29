const { Product } = require('../models');

const productData = [
    // Thanksgiving
  {
    product_name: 'wire pumpkin halloween decor',
    price: 4.00,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: '5ft fall leaf garland',
    price: 4.00,
    stock: 25,
    category_id: 2,
  },
  {
    product_name: 'hello fall wall sign 10in x 10in',
    price: 4.00,
    stock: 12,
    category_id: 3,
  },
  {
    product_name: '31in fall porch board - hello pumpkin',
    price: 2.50,
    stock: 50,
    category_id: 4,
  },
  {
    product_name: '6ft hello fall banner',
    price: 3.00,
    stock: 22,
    category_id: 5,
  },
  {
    product_name: 'matching pet & owner fall beanie hats set - pumpkin spice',
    price: 5.00,
    stock: 22,
    category_id: 6,
  },
  // Christmas
  {
    product_name: 'ladies 12 days of socks holiday gift set',
    price: 5.00,
    stock: 20,
    category_id: 7,
  },
  {
    product_name: 'oreo® cookie dunk mug set',
    price: 5.00,
    stock: 25,
    category_id: 8,
  },
  {
    product_name: 'grand ferrero rocher® chocolate & hazelnut candy',
    price: 5.00,
    stock: 12,
    category_id: 9,
  },
  {
    product_name: 'hot chocolate bomb with mini marshmallows 1.6oz',
    price: 3.00,
    stock: 50,
    category_id: 10,
  },
  {
    product_name: '3ft inflatable christmas ornament',
    price: 10.00,
    stock: 22,
    category_id: 11,
  },
  {
    product_name: 'hershey® build your own chocolate cookie house kit',
    price: 5.00,
    stock: 22,
    category_id: 12,
  },
  //Misc
  {
    product_name: 'Small American Flag',
    price: 1.30,
    stock: 20,
    category_id: 13,
  },
  {
    product_name: 'Glitter Patriotic Fireworks Centerpiece',
    price: 7.00,
    stock: 25,
    category_id: 14,
  },
  {
    product_name: 'Medium Patriotic American Flag Bunting',
    price: 5.00,
    stock: 12,
    category_id: 15,
  },
  {
    product_name: 'hot chocolate bomb with mini marshmallows 1.6oz',
    price: 3.00,
    stock: 50,
    category_id: 16,
  },
  {
    product_name: 'Small Patriotic American Flag Bow',
    price: 2.00,
    stock: 22,
    category_id: 17,
  },
  {
    product_name: 'Patriotic American Flag Flannel-Backed Vinyl Tablecloth',
    price: 5.00,
    stock: 22,
    category_id: 18,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;