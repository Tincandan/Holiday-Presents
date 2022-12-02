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