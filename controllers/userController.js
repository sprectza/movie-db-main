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

// Add favourite movies 
exports.addFavorite = async (req, res, next) => {
    try {
        const movieId = req.params.movieId;
        const userId = req.user.id;

        const movie = await Movie.findById(movieId);
        if (!movie) {
            return res.status(404).json({
                success: false,
                message: 'Movie not found'
            });
        }

        const user = await User.findById(userId);
        if (user.favorites.includes(movieId)) {
            return res.status(400).json({
                success: false,
                message: 'Movie already in favorites'
            });
        }

        user.favorites.push(movieId);
        await user.save()

        res.status(200).json({
            success: true,
            message: 'Movie added to favorites',
            data: user.favorites
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
}