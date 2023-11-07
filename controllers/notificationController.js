// Import the Notification model and any other necessary dependencies.
const Notification = require('../models/notificationModel');

// Function to get user notifications
exports.getNotifications = async (req, res) => {
  try {
    const user = req.user; // Assuming user data is available in req.user.

    // Retrieve user notifications from the database.
    const notifications = await Notification.find({ userId: user._id })
      .sort({ createdAt: -1 })
      .limit(10); // Example: Get the latest 10 notifications.

    res.json({ notifications });
  } catch (error) {
    console.error('Error fetching user notifications:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
