const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config');


async function register(email, password) {
    const existing = await User.findOne({ email });

    if (existing) {
        const error = new Error('User with such an email already exists!');
        error.status = 409;
        throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, hashedPassword });

    await user.save();
    return {
        _id: user._id,
        email: user.email,
        accessToken: generateToken(user)
    };
}

async function login(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
        const error = new Error('Email or password does not watch!');
        error.status = 401;
        throw error;
    }
    const match = await bcrypt.compare(password, user.hashedPassword);

    if (!match) {
        const error = new Error('Email or password does not watch!');
        error.status = 401;
        throw error;
    }

    return {
        _id: user._id,
        email: user.email,
        accessToken: generateToken(user)
    };
}

function generateToken(user) {
    const tkn = jwt.sign({
        _id: user._id,
        email: user.email
    }, SECRET);

    return tkn;
}

module.exports = {
    register,
    login
};
