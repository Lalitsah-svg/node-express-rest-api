const {
  getAllPosts,
  createPost
} = require("../models/postModel");

// GET ALL POSTS
const getPosts = async (req, res) => {
  try {
    const posts = await getAllPosts();

    res.status(200).json({
      success: true,
      data: posts
    });
  } catch (error) {
    console.error("Get posts error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch posts"
    });
  }
};

// CREATE POST
const createPostController = async (req, res) => {
  try {
    const { title, content, authorId } = req.body;

    if (!title || !content || !authorId) {
      return res.status(400).json({
        success: false,
        message: "Title, content and authorId are required"
      });
    }

    const post = await createPost(
      title.trim(),
      content.trim(),
      authorId
    );

    res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: post
    });
  } catch (error) {
    console.error("Create post error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to create post"
    });
  }
};

module.exports = {
  getPosts,
  createPost: createPostController
};