import Project from "../models/projects.js";

// Fetch all projects
export const allProjects = async (req,res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch(error) {
        console.error("Error fetching projects:", error); // log error in server console
        res.status(500).json({ message: "Server error", error: error.message });
    }
};