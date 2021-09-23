require('dotenv').config();
const { Pool ,Client } = require("pg");
const pool = new Pool({
  user: "zryigjdlrkdqlf",
  password: process.env.PG_PASS,
  host: "ec2-54-145-110-118.compute-1.amazonaws.com",
  port: "5432",
  database: "dde30rpmi0tt2k",
});

module.exports = pool;
