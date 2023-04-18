const Movie = require('../models/Movie')

exports.addMovie = async (req, res) => {
    try {
        const { title, director, genre, releaseYear } = req.body;
        const movie = new Movie({ title, director, genre, releaseYear });

        await movie.save();
        res.status(201).json({ movie });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json({ movies });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateMovie = async (req, res) => {
    try {
        const { title, director, genre, releaseYear } = req.body;
        const movie = await Movie.findByIdAndUpdate(
            req.params.id,
            { title, director, genre, releaseYear },
            { new: true }
        );
        if (!movies) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(200).json({ movie });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        res.status(200).json({ message: 'Movie deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getMoviesById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(200).json({ movie });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};
