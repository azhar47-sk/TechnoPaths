import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Import your models
import Student from "./models/students.js";
import Sponsor from "./models/sponsors.js";
import Project from "./models/projects.js";

async function testSchema() {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000 // 5 seconds
        });
        console.log("✅ Connected to MongoDB");

        // Create Student
        const student = await Student.create({
            name: "Azhar Shaikh",
            email: "azhar@test.com",
            password: "hashed_password",
            branch: "Electronics & Telecommunication",
            college: "Test Engineering College",
            year: 4
        });
        console.log("✅ Student created:", student);

        // Create Sponsor
        const sponsor = await Sponsor.create({
            name: "John Doe",
            email: "john@sponsor.com",
            password: "hashed_password",
            company: "Tech Investors Inc",
            profession: "Angel Investor"
        });
        console.log("✅ Sponsor created:", sponsor);

        // Create Project linked to Student
        const project = await Project.create({
            title: "Transmission Line Fault Detection",
            description: "Detects L-L, L-G, and fire faults using ESP32 and sensors.",
            categories: ["IoT", "Electronics"],
            tags: ["ESP32", "Relay"],
            technologies: ["ESP32", "Relay", "Flame Sensor"],
            status: "in-progress",
            student: student._id
        });
        console.log("✅ Project created:", project);

    } catch (err) {
        console.error("❌ Test failed:", err);
    } finally {
        mongoose.connection.close();
    }
}

testSchema();