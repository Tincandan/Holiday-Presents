const router = require('express').Router();
const customerRoutes = require('./customerRoutes');
const cartRoutes = require('./cartRoutes');
const categoryRoutes = require('./categoryRoutes');
const productRoutes = require('./productRoutes');

router.use('/customer', customerRoutes);
router.use('/cart', cartRoutes);
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);


module.exports = router;