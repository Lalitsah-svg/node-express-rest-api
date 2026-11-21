const pool = require("../db");

const getAllPosts = async () => {
  const result = await pool.query(`
    SELECT
      posts.id,
      posts.title,
      posts.content,
      posts.author_id,
      users.name AS author_name,
      posts.created_at,
      posts.updated_at
    FROM posts
    LEFT JOIN users ON posts.author_id = users.id
    ORDER BY posts.id DESC
  `);

  return result.rows;
};

const createPost = async (title, content, authorId) => {
  const result = await pool.query(
    `
    INSERT INTO posts (title, content, author_id)
    VALUES ($1, $2, $3)
    RETURNING *
    `,
    [title, content, authorId]
  );

  return result.rows[0];
};

module.exports = {
  getAllPosts,
  createPost
};