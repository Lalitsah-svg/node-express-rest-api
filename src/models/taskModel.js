const pool = require("../db");

const getAllTasks = async () => {
  const result = await pool.query(`
    SELECT *
    FROM tasks
    ORDER BY id DESC
  `);

  return result.rows;
};

const createTask = async (title, description, userId) => {
  const result = await pool.query(
    `
    INSERT INTO tasks (title, description, user_id)
    VALUES ($1, $2, $3)
    RETURNING *
    `,
    [title, description, userId]
  );

  return result.rows[0];
};

module.exports = {
  getAllTasks,
  createTask
};