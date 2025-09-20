import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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

// Password hashing before saving
StudentSchema.pre("save", async function (next) {
  if(!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare passwords for login
StudentSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword,this.password);
};

export default mongoose.model("Student", StudentSchema);