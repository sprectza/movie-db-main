const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

router.get('/example', protect, (req, res) => {
    res.json({ message: 'This is a protected route' });
});

module.exports = router;