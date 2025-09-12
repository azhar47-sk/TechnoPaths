// models/Project.js
import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    images: {
        type: [String], // Array of image URLs
        default: []
    },

    videoUrl: {
        type: String
    },

    technologies: {
        type: [String], // Example: ["ESP32", "Relay", "Flame Sensor"]
        default: []
    },

    categories: {
        type: [String], // Example: ["IoT", "Electronics", "Automation"]
        default: []
    },

    tags: {
        type: [String], // Example: ["ESP32", "Sensor", "SmartGrid"]
        default: []
    },

    status: {
        type: String,
        enum: ["idea", "in-progress", "completed"],
        default: "idea"
    },

    upvotes: {
        type: Number,
        default: 0
    },

    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Project", ProjectSchema);
