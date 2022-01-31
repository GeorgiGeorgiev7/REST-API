const router = require('express').Router();
const { register } = require('../services/user');

router.post('/register', async (req, res) => {
    const email = req.body.email.trim();
    const password = req.body.password.trim();

    try {
        if (email) {
            throw new Error('Email is required!');
        }

        if (password.length < 4) {
            throw new Error('Password must be at least 4 characters long!');
        }

        const userData = await register(
            email.toLocaleLowerCase(),
            password
        );

        res.json(userData);

    } catch (err) {
        res.status(err.status || 400).json({ message: err.message });
    }

});

router.post('/login', async (req, res) => {
    const email = req.body.email.trim();
    const password = req.body.password.trim();

    try {
        const userData = await login(
            email.toLocaleLowerCase(),
            password
        );

        res.json(userData);

    } catch (err) {
        res.status(err.status || 400).json({ message: err.message });
    }

});

module.exports = router;
