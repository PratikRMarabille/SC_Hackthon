const Project = require("../models/Project");
const { analyzeData } = require("../utils/predictiveAnalysis");

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user.id });
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.createProject = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newProject = new Project({
      name,
      description,
      user: req.user.id,
    });

    const project = await newProject.save();
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getPredictiveAnalysis = async (req, res) => {
  try {
    const analysisResult = await analyzeData(req.user.id);
    res.json(analysisResult);
  } catch (error) {
    console.error("Error getting predictive analysis:", error);
    res.status(500).send("Server Error");
  }
};
