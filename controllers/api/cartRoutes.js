const router = require('express').Router();
const { Cart, Customer, Product } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async(req,res) => {
    const cartData = await Cart.findAll({ include: Product, Customer }).catch((err) => {
        res.json(err);
    });
    const cart = cartData.map((cart) => cart.get({ plain:true }));
    res.render('all', { cart });
})

router.get('/:id', async(req, res) => {
    try{
        const cartData = await Cart.findByPk(req.params.id, { include: Product, Customer} );
        if(!cartData){
            res.status(404).json({ message: 'No cart found' });
            return;
        }
        const cart = cartData.get({ plain: true });
        res.render('cart', cart);
    }
    catch(err){
        res.status(500).json(err);
    };
});

router.post('/', withAuth, async(req, res) => {
    try {
        const cartData = await Cart.create(req.body);
        res.status(200).json(cartData);
    }
    catch(err){
        res.status(400).json(err);
    }
});

router.put('/:id', withAuth, async(req,res) => {
    try{
        const cartData = await Cart.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(cartData);
    }
    catch(err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async(req,res) => {
    try {
        const cartData = await Cart.destroy({
            where: {
                id: req.params.id
            }
        });
        if(!cartData) {
            res.status(404).json({ message: 'No cart' });
            return;
        }
        res.status(200).json(cartData);
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;