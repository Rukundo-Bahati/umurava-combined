import mongoose from "mongoose";

const challengeSchema = new mongoose.Schema(
  {
    image: { type: String },
    skills: { type: String, required: true },
    level: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], default: "Beginner" },
    timeline: { type: String, default: "7 days" },
    description: { type: String, default: "No description provided" },
    instructions: { type: String, default: "Follow the guidelines and complete the challenge." },
    status: { type: String, enum: ["Open", "Ongoing", "Completed"], default: "Open" }, 
  },
  { timestamps: true }
);

const Challenge = mongoose.model("Challenge", challengeSchema);

export default Challenge;
