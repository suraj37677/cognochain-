const express = require('express');
const router = express.Router();

// Import the User model and any other necessary dependencies.
const User = require('../models/userModel');

// Middleware for user authentication (you should implement this).
const authenticateUser = (req, res, next) => {
  
  next();
};

// Get user data
router.get('/profile', authenticateUser, async (req, res) => {
  try {
    // Retrieve user data from the authenticated user in req.user.
    const user = req.user; 

    res.json({ user });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update user profile
router.post('/update-profile', authenticateUser, async (req, res) => {
  try {
    const { name, email, bio, profileImage } = req.body;
    const user = req.user; // Assuming user data is available in req.user.

  
    user.name = name;
    user.email = email;
    user.bio = bio;
    user.profileImage = profileImage;

    await user.save();

    res.json({ success: true, message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
