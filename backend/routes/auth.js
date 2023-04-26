const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const User = require("../models/User");
const authController = require("../controllers/auth");

// @route   GET /auth/users
// @desc    Get all the users
// @access  Private
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ data: users, message: "Users retrieved successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   POST /auth/signup
// @desc    Register user
// @access  Public
router.post(
  "/signup",
  [
    check("firstName", "Please enter your first name").notEmpty(),
    check("lastName", "Please enter your last name").notEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  authController
);

module.exports = router;
