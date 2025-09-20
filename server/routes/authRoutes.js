import express from "express";
import { registerStudent, loginStudent } from "../controllers/studentAuthController.js";
import { registerSponsor, loginSponsor } from "../controllers/sponsorAuthController.js";

const router = express.Router();

// Student Routes
router.post("/student/register", registerStudent);
router.post("/student/login", loginStudent);

// Sponsor Routes
router.post("/sponsor/register", registerSponsor);
router.post("/sponsor/login", loginSponsor);

export default router;