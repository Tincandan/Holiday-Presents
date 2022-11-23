const router = require('express').Router();
const customerRoutes = require('./customerRoutes');
const cartRoutes = require('./cartRoutes');

router.use('/customer', customerRoutes);
router.use('/cart', cartRoutes);

module.exports = router;