const User = require('../models/User');
const ErrorResponse = require('../utils/errorHandling');

// Get all users
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, data: users });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server errors' });
    }
};

// Get user by ID
exports.getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return next(new ErrorResponse('User not found in DB'));
        }

        res.status(200).json({ success: true, data: user });
    } catch (err) {
        res.status(500).json({ success: true, error: 'Server error' });
    }
};