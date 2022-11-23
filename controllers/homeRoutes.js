const router = require('express').Router();
const { Category, Customer, Cart, Product } = require('../models');

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});

module.exports = router;