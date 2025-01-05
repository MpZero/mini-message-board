const pool = require("./pool");

async function getAllMsg() {
  try {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
  } catch (error) {
    console.error("Error getting all messages:", error);
    throw new Error("Failed to retrieve all messages");
  }
}

async function insertMsg(message, username) {
  try {
    const { rows } = await pool.query(
      "INSERT INTO messages(message, username) VALUES($1, $2)",
      [message, username]
    );
    return rows;
  } catch (error) {
    console.error("Error inserting message:", error);
    throw new Error("Database insertion failed");
  }
}

async function getOneMsg(id) {
  try {
    const { rows } = await pool.query(
      "SELECT username, message, date FROM messages WHERE id = ($1)",
      [id]
    );
    return rows;
  } catch (error) {
    console.error("Error getting single message:", error);
    throw new Error("Failed to retrieve single message");
  }
}
module.exports = {
  getAllMsg,
  insertMsg,
  getOneMsg,
};
