require("dotenv").config();

const pool = require("./db");

async function testDatabase() {
  try {
    const result = await pool.query(`
      SELECT
        (SELECT COUNT(*) FROM users) AS users_count,
        (SELECT COUNT(*) FROM posts) AS posts_count,
        (SELECT COUNT(*) FROM tasks) AS tasks_count
    `);

    console.log("Database connection successful");
    console.log("Users:", result.rows[0].users_count);
    console.log("Posts:", result.rows[0].posts_count);
    console.log("Tasks:", result.rows[0].tasks_count);
  } catch (error) {
    console.error("Database test failed:", error.message);
  } finally {
    await pool.end();
  }
}

testDatabase();