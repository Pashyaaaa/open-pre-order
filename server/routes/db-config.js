const mysql = require("mysql2");
const dotenv = require("dotenv").config();
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

module.exports = db;
