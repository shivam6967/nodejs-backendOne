import express from "express";
import userRouter from "./routes/user.routes.js";
import taskRouter from "./routes/task.routes.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { newTask } from "./controllers/task.controllers.js";
import { errorMiddleware } from "./middlewares/error.middlewares.js";
import cors from "cors";


export const app = express();

// Configuring the dotenv file : 
config({
    path: "./data/config.env"
})

// Middleware : for sending json data from the POSTMAN 
app.use(express.json());
app.use(cookieParser());
app.use( "/api/v1/users" ,userRouter);
app.use( "/api/v1/task" ,taskRouter);
app.use(errorMiddleware);
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET" , "POST" , "PUT" , "POST"],
    credentials: true,
}))


app.get("/" , (req, res) => {
    res.send("Server is Working");
});


