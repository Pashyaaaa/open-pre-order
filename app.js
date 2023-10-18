const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const path = require("path");
const app = express();
const router = require("./routes/pages");
const authRouter = require("./routes/auth");

dotenv.config({
  path: "./.env",
});

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "hbs");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MySQL Connected...");
  }
});

app.use("/", router);
app.use("/auth", authRouter);

app.listen(3000, () => {
  console.log("Server Is Running in 3000");
});
