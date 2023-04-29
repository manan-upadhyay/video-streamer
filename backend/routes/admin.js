const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const adminController = require("../controllers/admin");

// @route   POST /admin/add-video
// @desc    add new video
// @access  Private
router.post(
  "/add-video",
  [
    check("title", "title is required").notEmpty(),
    check("link", "Link is required").notEmpty(),
    check("description", "Description is required").notEmpty(),
    check("thumbnail", "Thumbnail is required").notEmpty(),
  ],
  adminController.postAddVideo
);

module.exports = router;
