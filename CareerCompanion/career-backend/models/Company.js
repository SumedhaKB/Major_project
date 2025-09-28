import mongoose from "mongoose";

const RoundSchema = new mongoose.Schema({
  name: String,
  description: String
});

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  shortDescription: String,
  roles: [String],
  rounds: [RoundSchema],
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model("Company", CompanySchema);
