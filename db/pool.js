require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.PRODUCTION_URL,
});

module.exports = pool;

// const { Pool } = require("pg");

// module.exports = new Pool({
//   user: process.env.USERNAME,
//   host: process.env.HOST,
//   database: process.env.DATABASE,
//   password: process.env.PASSWORD,
//   port: 5432,
// });
