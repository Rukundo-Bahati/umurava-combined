// import { date } from "joi";
import mongoose from "mongoose";

const challengeSchema = new mongoose.Schema(
  {
    title: { type: String },
    money_prize: { type: String},
    duration: { type: String},
    email:  { type: String },
    skills: { type: String, required: true },
    level: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], default: "Beginner" },
    timeline: { type: String, default: "7 days" },
    description: { type: String, default: "No description provided" },
    brief: { type: String},
    tasks: { type: String},
    status: { type: String, enum: ["Open", "Ongoing", "Completed"], default: "Open" }, 
  },
  { timestamps: true }
);

const Challenge = mongoose.model("Challenge", challengeSchema);

export default Challenge;
