const router = require('express').Router();
const { Cart, Category, Customer, Product } = require('../../models');

// Create new user
router.post('/', async (req, res) => {
    //console.log(req);
    try {
        const dbUserData = await Customer.create({
            user_name: req.body.username,
            email: req.body.email,
            password: req.body.password,
            contact_add: "",
        });
       // console.log(dbUserData);

        req.session.save(() => {
            req.session.logged_in = true;

            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await Customer.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!dbUserData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again' });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again' });
                return;
        }

        req.session.save(() => {
            req.session.logged_in = true;

            res
                .status(200)
                .json({ user: dbUserData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Logout
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// Put route to update and add onto that saved product ids table

module.exports = router;