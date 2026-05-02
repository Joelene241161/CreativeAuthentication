const express = require('express');
const router = express.Router();
const User = require('../models/User');

//Create a new user
router.post('register', async (requestAnimationFrame, res) => {
    const { name, email, password } = requestAnimationFrame.body;

    try {
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})