const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("../models/User");
const dbConfig = require("../config/dbConfig");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose
    //.connect(dbConfig.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .connect(dbConfig.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// API Endpoint: Login
app.post("/api/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user in the database
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Validate password (for simplicity, plain comparison; use hashing in production)
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid password" });
        }

        // Login successful
        res.status(200).json({ message: "Login successful" });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
