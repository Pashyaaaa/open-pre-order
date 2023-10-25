import express from "express";
const app = express();
import dotenv from "dotenv";
import db from "./config/db.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
const PORT = 5000;

try {
  await db.authenticate();
  console.log("Database Connected");
} catch (error) {
  console.error(error);
}

// react js defaultnya adalah 3000
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server Is Running in ${PORT}`);
});
