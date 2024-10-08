const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authMiddleware = require("../middleware/authMiddleware");
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/authController");

// @route    POST api/auth/register
// @desc     Register user
// @access   Public
router.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  registerUser
);

// @route    POST api/auth/login
// @desc     Authenticate user & get token
// @access   Public
router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  loginUser
);

// @route    GET api/auth
// @desc     Get logged in user
// @access   Private
router.get("/", authMiddleware, getUser);

module.exports = router;
