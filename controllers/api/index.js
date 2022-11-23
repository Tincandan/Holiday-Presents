const router = require('express').Router();
const userRoutes = require('./customerRoutes');

router.use('/customer', customerRoutes);

module.exports = router;