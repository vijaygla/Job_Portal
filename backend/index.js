import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";

dotenv.config({})

const app = express();

app.get("/home", (req, res) => {
  return res.status(200).json({
    message: "I am comming from backend",
    success: true
  })
})

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
const corsOption = {
  origin: 'http//localhost:5173',
  Credential: true
}
app.use(cors(corsOption));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(chalk.yellowBright.bold.underline(`Server is Running at port ${PORT}`));
})
