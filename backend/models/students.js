import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  name:       { type: String, required: true },
  email:      { type: String, required: true, unique: true },
  password:   { type: String, required: true }, // hash before saving
  branch:     { type: String },                 
  college:    { type: String },
  year:       { type: Number },                 
  bio:        { type: String },
  createdAt:  { type: Date, default: Date.now }
});

export default mongoose.model("Student", StudentSchema);