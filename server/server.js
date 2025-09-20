import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from "cors";

// Routes
import projectRoutes from "./routes/projectRoutes.js";
import authRoutes from "./routes/authRoutes.js";

// Configs
import connectDB from "./config/db.js";
dotenv.config();

// Middlewares
import {notFound,errorHandler} from "./middleware/errorMiddleware.js";

const app = express();
const Port = process.env.PORT || 3000

// Database
connectDB();

// Import your models
import Student from "./models/students.js";
import Sponsor from "./models/sponsors.js";
import Project from "./models/projects.js";

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173", // ✅ specify frontend URL, not "*"
    credentials: true,              // ✅ allow cookies / credentials
  })
);
app.use(express.json());

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);

// Middlewares
app.use(notFound);
app.use(errorHandler);

app.get('/',(req,res)=>{
    res.send('hello world!');
})

app.listen(Port,()=>{
    console.log(`listening on port ${Port}`);
})