const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("../controllers/auth");

// @route   GET /auth/users
// @desc    Get all the users
// @access  Public
router.get("/users", authController.getUsers);

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
    check("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),
  ],
  authController.postSignup
);

// @route   POST /auth/login
// @desc    Login user
// @access  Public
router.post(
  "/login",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  authController.postLogin
);

module.exports = router;
