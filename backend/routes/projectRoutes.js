const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  getProjects,
  createProject,
  getPredictiveAnalysis,
} = require("../controllers/projectController");

// @route    GET api/projects
// @desc     Get all projects
// @access   Private
router.get("/", authMiddleware, getProjects);

// @route    POST api/projects
// @desc     Create a project
// @access   Private
router.post("/", authMiddleware, createProject);

// @route    GET api/projects/analysis
// @desc     Get predictive analysis
// @access   Private
router.get("/analysis", authMiddleware, getPredictiveAnalysis);

module.exports = router;
