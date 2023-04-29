const express = require("express");
const router = express.Router();
const dataController = require("../controllers/data");
const authMiddleware = require("../middleware/isAuth");

// @route   GET /videos
// @desc    Get all the videos
// @access  Private
router.get("/videos", authMiddleware, dataController.getVideos);

module.exports = router;
