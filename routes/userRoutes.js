const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware.protect, userController.getUsers);
router.get('/:id', authMiddleware.protect, userController.getUserById);

module.exports = router; 