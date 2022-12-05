const router = require('express').Router();
const { Category, Customer, Cart, Product } = require('../models');

// Render homepage view
router.get('/', async (req, res) => {
    try {
        const dbCategoryData = await Category.findAll();
      
          const categories = dbCategoryData.map((category) =>
            category.get({ plain: true })
          );
          // TODO: Send over the 'loggedIn' session variable to the 'homepage' template
          res.render('homepage', {
            categories,
            loggedIn: req.session.logged_in
          });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
    //console.log(req.session.logged_in)
});

router.get('/category/:id', async(req, res) => {   
    try {
        const dbCategoryData = await Category.findByPk(req.params.id, {include: Product});
        const category = dbCategoryData.get({ plain: true });
        console.log(category)
        res.render('category', { category });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/product/:id', async (req, res) => {   
  try {
      const dbProductData = await Product.findByPk(req.params.id);
      console.log(dbProductData);
      const product = dbProductData.get({ plain: true });
      console.log(product)
      res.render('product', product);
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

// Render cart view
router.get('/cart', (req, res) => {
    res.render('cart', {loggedIn: req.session.logged_in});
});

// Render login view
router.get('/login', (req, res) => {
    //console.log(req.session)
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});

module.exports = router;