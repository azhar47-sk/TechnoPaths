import mongoose from "mongoose";

const SponsorSchema = new mongoose.Schema({
  name:       { type: String, required: true },
  email:      { type: String, required: true, unique: true },
  password:   { type: String, required: true },
  company:    { type: String },                
  profession: { type: String },                
  bio:        { type: String },
  createdAt:  { type: Date, default: Date.now }
});

export default mongoose.model("Sponsor", SponsorSchema);
