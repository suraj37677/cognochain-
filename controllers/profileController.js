// Import the User model and any other necessary dependencies.
const User = require('../models/userModel');

// Function to update user profile details
exports.updateProfile = async (req, res) => {
  try {
    const { name, email, bio } = req.body;
    const user = req.user; // Assuming user data is available in req.user.

    // Update the user's profile data in the database, e.g., using Mongoose for MongoDB.
    user.name = name;
    user.email = email;
    user.bio = bio;

    await user.save();

    res.json({ success: true, message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Function to upload user profile picture
exports.uploadProfilePicture = async (req, res) => {
  try {
    const user = req.user; // Assuming user data is available in req.user.
    const uploadedImage = req.file;

    if (!uploadedImage) {
      return res.status(400).json({ error: 'No image file uploaded' });
    }

    // Store the image file path or data in the user's profile in the database.
    user.profileImage = uploadedImage.path; // Adjust this based on your file storage method.

    await user.save();

    res.json({ success: true, message: 'Profile picture uploaded successfully' });
  } catch (error) {
    console.error('Error uploading user profile picture:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
