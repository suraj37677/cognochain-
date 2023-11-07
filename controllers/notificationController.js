
const Notification = require('../models/notificationModel');

// Function to get user notifications
exports.getNotifications = async (req, res) => {
  try {
    const user = req.user; 

    // Retrieve user notifications from the database.
    const notifications = await Notification.find({ userId: user._id })
      .sort({ createdAt: -1 })
      .limit(10); 

    res.json({ notifications });
  } catch (error) {
    console.error('Error fetching user notifications:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
