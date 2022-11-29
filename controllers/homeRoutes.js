const router = require('express').Router();
const { Category, Customer, Cart, Product } = require('../models');

// Render homepage view
router.get('/', (req, res) => {
    //console.log(req.session.logged_in)
    res.render('homepage', {loggedIn: req.session.logged_in});
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