import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes.js";
dotenv.config();

const app = express();
const Port = process.env.PORT || 3000

// Database
mongoose.connect(process.env.MONGO_URI)
.then(()=> {console.log('MongoDB Connected')})
.catch(err=>console.log(err));

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

app.get('/',(req,res)=>{
    res.send('hello world!');
})

app.listen(Port,()=>{
    console.log(`listening on port ${Port}`);
})