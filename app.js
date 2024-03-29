import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// Importing routes and controllers
import userRouter from "./routes/user.routes.js";
import taskRouter from "./routes/task.routes.js";
import { errorMiddleware } from "./middlewares/error.middlewares.js";

export const app = express();

// Configuring the dotenv file
config({
    path: "./data/config.env"
});

// Middleware
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

// Error handling middleware
app.use(errorMiddleware);

// Default route
app.get("/", (req, res) => {
    res.send("Server is Working");
});