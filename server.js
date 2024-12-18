// 1. server.js (Node.js backend with Express)
const express = require('express');
const mongoose = require('./config/database');
const path = require('path');
const bodyParser = require('body-parser');
const User = require('./models/user');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
        res.status(200).send('Login successful!');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const newUser = new User({ email, password });
        await newUser.save();
        res.status(201).send('Registration successful!');
    } catch (err) {
        res.status(400).send('Error registering user');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
