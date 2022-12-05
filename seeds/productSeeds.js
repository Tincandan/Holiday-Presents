const { Product } = require('../models');

const productData = [
    // Thanksgiving
  {
    product_name: 'wire pumpkin halloween decor',
    product_image: '/images/products/thanksgiving//wired-pumpkin.jpg',
    product_price: 4.00,
    product_stock: 20,
    category_id: 2,
  },
  {
    product_name: '5ft fall leaf garland',
    product_image: '/images/products/thanksgiving/leaf_garland.jpg',
    product_price: 4.00,
    product_stock: 25,
    category_id: 2,
  },
  {
    product_name: 'hello fall wall sign 10in x 10in',
    product_image: '/images/products/thanksgiving/hello_fall_wall_sign.jpg',
    product_price: 4.00,
    product_stock: 12,
    category_id: 2,
  },
  {
    product_name: '31in fall porch board - hello pumpkin',
    product_image: '/images/products/thanksgiving/fall_hello_pumkin.jpg',
    product_price: 2.50,
    product_stock: 50,
    category_id: 2,
  },
  {
    product_name: '6ft hello fall banner',
    product_image: '/images/products/thanksgiving/6ft_hello_fall_banner.jpg',
    product_price: 3.00,
    product_stock: 22,
    category_id: 2,
  },
  {
    product_name: 'matching pet & owner fall beanie hats set - pumpkin spice',
    product_image: '/images/products/thanksgiving/pumkin_spice_beanie_hat_set.jpg',
    product_price: 5.00,
    product_stock: 22,
    category_id: 2,
  },
  // Christmas
  {
    product_name: 'ladies 12 days of socks holiday gift set',
    product_image: '/images/products/christmas/ladies_12_days_of_socks_holiday_gift_set.jpg',
    product_price: 5.00,
    product_stock: 20,
    category_id: 1,
  },
  {
    product_name: 'oreo® cookie dunk mug set',
    product_image: '/images/products/christmas/oreo_cookie_dunk_mug_set.jpg',
    product_price: 5.00,
    product_stock: 25,
    category_id: 1,
  },
  {
    product_name: 'grand ferrero rocher® chocolate & hazelnut candy',
    product_image: '/images/products/christmas/rand_ferrero_rocher_chocolate_hazelnut_candy.jpeg',
    product_price: 5.00,
    product_stock: 12,
    category_id: 1,
  },
  {
    product_name: 'hot chocolate bomb with mini marshmallows 1.6oz',
    product_image: '/images/products/christmas/hot_chocolate_bomb_mini_marshmallows.jpg',
    product_price: 3.00,
    product_stock: 50,
    category_id: 1,
  },
  {
    product_name: '3ft inflatable christmas ornament',
    product_image: '/images/products/christmas/inflatable_christmas_ornament.jpg',
    product_price: 10.00,
    product_stock: 22,
    category_id: 1,
  },
  {
    product_name: 'hershey® build your own chocolate cookie house kit',
    product_image: '/images/products/christmas/hershey_build_your_own_chocolate_cookie_house_kit.jpg',
    product_price: 5.00,
    product_stock: 22,
    category_id: 1,
  },
  //Misc
  {
    product_name: 'Small American Flag',
    product_image: '',
    product_price: 1.30,
    product_stock: 20,
    category_id: 4,
  },
  {
    product_name: 'Glitter Patriotic Fireworks Centerpiece',
    product_image: '',
    product_price: 7.00,
    product_stock: 25,
    category_id: 3,
  },
  {
    product_name: 'Medium Patriotic American Flag Bunting',
    product_image: '',
    product_price: 5.00,
    product_stock: 12,
    category_id: 3,
  },
  {
    product_name: 'hot chocolate bomb with mini marshmallows 1.6oz',
    product_image: '',
    product_price: 3.00,
    product_stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Small Patriotic American Flag Bow',
    product_image: '',
    product_price: 2.00,
    product_stock: 22,
    category_id: 3,
  },
  {
    product_name: 'Patriotic American Flag Flannel-Backed Vinyl Tablecloth',
    product_image: '',
    product_price: 5.00,
    product_stock: 22,
    category_id: 3,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;