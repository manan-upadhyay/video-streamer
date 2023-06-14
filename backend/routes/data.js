const express = require('express');
const router = express.Router();
const dataController = require('../controllers/data');
const authMiddleware = require('../middleware/isAuth');

// @route   GET /sections
// @desc    Get all the sections
// @access  Private
router.get('/sections', authMiddleware, dataController.getSections);

// @route   GET /folders
// @desc    Get all the folders
// @access  Private
router.get('/folders', authMiddleware, dataController.getFolders);

// @route   GET /videos
// @desc    Get all the videos
// @access  Private
router.get('/videos', authMiddleware, dataController.getVideos);

module.exports = router;
