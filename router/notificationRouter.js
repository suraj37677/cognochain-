const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const Notification = require('../models/notificationModel');


const authenticateUser = (req, res, next) => {
  
  next();
};

// Get user notifications
router.get('/', authenticateUser, async (req, res) => {
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
});

module.exports = router;
