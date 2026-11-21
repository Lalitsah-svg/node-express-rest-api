const {
  getAllTasks,
  createTask
} = require("../models/taskModel");

// GET ALL TASKS
const getTasks = async (req, res) => {
  try {
    const tasks = await getAllTasks();

    res.status(200).json({
      success: true,
      data: tasks
    });
  } catch (error) {
    console.error("Get tasks error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch tasks"
    });
  }
};

// CREATE TASK
const createTaskController = async (req, res) => {
  try {
    const { title, description, userId } = req.body;

    if (!title || !userId) {
      return res.status(400).json({
        success: false,
        message: "Title and userId are required"
      });
    }

    const task = await createTask(
      title.trim(),
      description ? description.trim() : null,
      userId
    );

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      data: task
    });
  } catch (error) {
    console.error("Create task error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to create task"
    });
  }
};

module.exports = {
  getTasks,
  createTask: createTaskController
};