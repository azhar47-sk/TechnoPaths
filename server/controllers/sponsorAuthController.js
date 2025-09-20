import AsyncHandler from "express-async-handler";
import jwt from 'jsonwebtoken';
import Sponsor from "../models/sponsors.js";

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};


// Sponsor Registration
export const registerSponsor = AsyncHandler(async (req, res) => {
    const { name, email, password, company, profession, bio } = req.body;

    // Checking for Empty details
    if (!name || !email || !password || !company || !profession) {
        res.send(400);
        throw new Error("Please fill in all required fields");
    }

    // Checking for existing User
    const userExist = await Sponsor.findOne({ email });
    if (userExist) {
        res.send(400);
        throw new Error("Sponsor already exists");
    }

    // Create a new User
    const sponsor = await Sponsor.create({
        name,
        email,
        password,
        company,
        profession,
        bio
    });

    res.status(201).json({
        _id: sponsor._id,
        name: sponsor.name,
        email: sponsor.email,
        token: generateToken(sponsor._id),
    })
})

// Login Sponsor

export const loginSponsor = AsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const sponsor = await Sponsor.findOne({ email }).select("+password");
    if (sponsor && (await sponsor.matchPassword(password))) {
        res.json({
            _id: sponsor._id,
            name: sponsor.name,
            email: sponsor.email,
            token: generateToken(sponsor._id),
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    };
});