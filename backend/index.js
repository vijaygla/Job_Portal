import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"

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

app.use("/api/v1/user", userRoute);

// thses are the api which will use for testing
// "http://localhost:8000/api/v1/user/register";
// "http://localhost:8000/api/v1/user/login";
// "http://localhost:8000/api/v1/user/is";


app.listen(PORT, () => {
  connectDB();
  console.log(chalk.yellowBright.bold(`Server is Running at port ${PORT}`));
})
