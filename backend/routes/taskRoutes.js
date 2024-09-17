const express = require('express');
const { createTask, getTasks, deleteTask } = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware');
const { managerOnly } = require('../middleware/roleMiddleware');
const router = express.Router();

router.route('/').post(protect, managerOnly, createTask).get(protect, getTasks);
router.route('/:id').delete(protect, deleteTask);

module.exports = router;


