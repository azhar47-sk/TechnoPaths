import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

const app = express();
const Port = process.env.PORT || 3000

// Database
mongoose.connect(process.env.MONGO_URI)
.then(()=> {console.log('MongoDB Connected')})
.catch(err=>console.log(err));

// Import your models
const Student = require("./models/Student");
const Sponsor = require("./models/Sponsor");
const Project = require("./models/Project");

// Middlewares
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello world!');
})

app.listen(Port,()=>{
    console.log(`listening on port ${Port}`);
})