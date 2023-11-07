const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const User = require('../models/userModel');

// Function to register a new user
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists in the database.
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password before storing it in the database.
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document in the database.
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // You can also generate a JWT token here for user authentication if needed.

    res.json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Function to authenticate and login a user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user in the database by email.
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the stored, hashed password.
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // If authentication is successful, you can generate a JWT token here.

    res.json({ success: true, message: 'User logged in successfully' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
