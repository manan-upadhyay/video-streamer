const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const adminController = require("../controllers/admin");

// @route   POST /admin/sections
// @desc    add new section
// @access  Private
router.post(
  "/sections",
  [check("title", "title is required").notEmpty()],
  adminController.postAddSection
);

// @route   POST /admin/folders
// @desc    add new folder
// @access  Private
router.post(
  "/folders",
  [check("title", "title is required").notEmpty()],
  adminController.postAddFolder
);

// @route   POST /admin/videos
// @desc    add new video
// @access  Private
router.post(
  "/videos",
  [
    check("title", "title is required").notEmpty(),
    check("link", "Link is required").notEmpty(),
    check("description", "Description is required").notEmpty(),
    check("thumbnail", "Thumbnail is required").notEmpty(),
    check("sectionId", "SectionId is required").notEmpty(),
    check("folderId", "FolderId is required").notEmpty(),
  ],
  adminController.postAddVideo
);

module.exports = router;
