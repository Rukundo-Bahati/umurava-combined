import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/challenges/create"; 

interface ChallengeData {
    title: string;
    deadline: string;
    duration: string;
    prize: string;
    contactEmail: string;
    description: string;
    brief: string;
    tasks: string;
    skills: string[]
  }

// Function to create a new challenge
export const createChallengeAPI = async (challengeData: ChallengeData) => {
    try {
      const response = await axios.post(API_URL, challengeData); 
      return response; // Ensure this returns a response object that has a 'data' property
    } catch (error) {
      throw error;
    }
  };