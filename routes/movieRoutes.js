const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware.protect, movieController.addMovie);
router.get('/', movieController.getMovies);
router.get('/:id', movieController.getMoviesById);
router.put('/:id', authMiddleware.protect, movieController.updateMovie);
router.delete('/:id', authMiddleware.protect, movieController.deleteMovie);

module.exports = router; 