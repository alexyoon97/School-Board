require('dotenv').config();
const { Pool ,Client } = require("pg");
const pool = new Pool({
  user: "postgres",
  password: process.env.PG_PASS,
  host: "localhost",
  port: "5432",
  database: "Dreamschool",
});

module.exports = pool;
