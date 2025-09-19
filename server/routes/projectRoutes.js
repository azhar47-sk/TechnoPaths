import express from "express";
import {allProjects} from "../controllers/projectController.js";

const router = express.Router();

router.get("/", allProjects);      // GET /api/projects

export default router;