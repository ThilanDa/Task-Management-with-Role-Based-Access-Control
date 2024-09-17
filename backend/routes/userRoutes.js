const express = require('express');
const { getAllUsers, deleteUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const { adminOnly } = require('../middleware/roleMiddleware');
const router = express.Router();

router.route('/').get(protect, adminOnly, getAllUsers);
router.route('/:id').delete(protect, adminOnly, deleteUser);

module.exports = router;
