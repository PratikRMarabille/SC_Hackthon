const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { getTasks, createTask } = require("../controllers/taskController");

// @route    GET api/tasks
// @desc     Get all tasks
// @access   Private
router.get("/", authMiddleware, getTasks);

// @route    POST api/tasks
// @desc     Create a task
// @access   Private
router.post("/", authMiddleware, createTask);

module.exports = router;
