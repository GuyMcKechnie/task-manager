const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const router = express.Router();

// Generate a jwt token that expires in 1 hour
const generateToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });
};

// Register the route
router.post("/register", async (req, res) => {
    //  Get the user data from the request body
    const { email, password } = req.body;
    try {
        // Find the user using their email
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({ message: "User already exists!" });
        //  Create a new user
        const user = new User({ email, password });
        await user.save();
        const token = generateToken(user);
        res.status(201).json({
            user: { id: user._id, email: user.email },
            token,
        });
    } catch (error) {
        res.status(500).json({ message: "Server error." });
    }
});

// Login route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(400).json({ message: "Invalid credentials!" });
        }
        const token = generateToken(user);
        res.json({ user: { id: user._id, email: user.email }, token });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
