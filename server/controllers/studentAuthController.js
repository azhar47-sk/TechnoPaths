import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import Student from "../models/students.js";

// Genrate JWT token
const generateToken = () => {
    return jwt.sign({ id, role: "student" }, process.env.JWT_SECRET,{expiresIn:"30d"});
};

// Registartion Controller
export const registerStudent = asyncHandler(async (req,res) => {
    console.log(req.body);  // Add this inside student register controller
    const {name,email,password,branch,college,year,bio} = req.body;

    // Checking for empty fields
    if(!name || !email || !password || !branch || !college || !year){
        res.status(400);
        throw new Error("Please fill in all fields");
    } 

    // Checking for Existing fields
    const userExists = await Student.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error("Student already exist");
    }

    // Create User
    const student = await Student.create({
        name,
        email,
        password,
        branch,
        college,
        year,
        bio,
    });

    res.send(201).json({
        _id: student._id,
        name : student.name,
        email: student.email,
        token: generateToken(student._id),
    });
});

// Login Controller
export const loginStudent = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;

    const student = await Student.findOne({email}).select("+password");
    if(student && await student.matchPassword(password)){
        res.json({
            _id: student._id,
            name: student.name,
            email: student.email,
            token: generateToken(student._id),
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});
