const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    director: {
        type: String,
        required: true,
        trim: true,
    },
    genre: {
        type: String,
        required: true,
        trim: true,
    },
    releaseYear: {
        type: Number,
        required: true,
    }
});

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie;