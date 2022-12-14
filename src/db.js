const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.USERNAME,
  host: "localhost",
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432,
});

module.exports = pool;
