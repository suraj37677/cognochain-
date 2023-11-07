
const User = require('../models/userModel');


exports.getProfile = async (req, res) => {
  try {
    const user = req.user; 

    res.json({ user });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Function to update user profile data
exports.updateProfile = async (req, res) => {
  try {
    const { name, email, bio, profileImage } = req.body;
    const user = req.user; // Assuming user data is available in req.user.

    // Update the user's profile data in the database, e.g., using Mongoose for MongoDB.
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
};
