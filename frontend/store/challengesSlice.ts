import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { createChallengeAPI } from "@/services/challengeService";

const API_URL = "http://localhost:5000/api/challenges";

// Define Challenge Types
interface Challenge {
  _id: string;
  title: string;
  description: string;
  image: string;
  skills: string;
  level: string;
  timeline: string;
  instructions: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface SingleChallenge {
  _id: string;
  title: string;
  description: string;
  email: string;
  prize: string;
  image: string;
  skills: string[];
  level: string;
  timeline: string;
  instructions: string;
  status: string;
  createdAt: string;
  tasks: string;
  updatedAt: string;
}

interface ChallengeData {
  title: string;
  deadline: string;
  duration: string;
  prize: string;
  contactEmail: string;
  description: string;
  brief: string;
  tasks: string;
  skills: string[];
}

interface ChallengeResponse {
  data: ChallengeData; // Define the response type
}

const initialState = {
  challenges: [] as Challenge[],  
  challenge: null as SingleChallenge | null,  // Correctly typed for a single challenge
  loading: false,
  error: null as string | null,
  success: false, // Success state for creating a challenge
};

// Fetch all challenges
export const fetchChallenges = createAsyncThunk(
  "challenges/fetchAll",
  async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch challenges");
    }
    return (await response.json()) as Challenge[];
  }
);

// Fetch a single challenge by ID
export const fetchChallengeById = createAsyncThunk(
  "challenges/fetchById",
  async (challengeId: string) => {
    const response = await fetch(`${API_URL}/${challengeId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch challenge");
    }
    return (await response.json()) as SingleChallenge;  // Make sure it's using SingleChallenge
  }
);

export const createChallenge = createAsyncThunk<ChallengeData, ChallengeData, { rejectValue: string }>(
  "challenges/create",
  async (challengeData: ChallengeData, { rejectWithValue }) => {
    try {
      const response: ChallengeResponse = await createChallengeAPI(challengeData);
      return response.data; // Return the data from the response
    } catch (error) {
      return rejectWithValue("Error creating challenge"); // Adjust error handling as needed
    }
  }
);

const challengesSlice = createSlice({
  name: "challenges",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChallenges.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChallenges.fulfilled, (state, action: PayloadAction<Challenge[]>) => {
        state.loading = false;
        state.challenges = action.payload;
      })
      .addCase(fetchChallenges.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch challenges";
      })
      .addCase(fetchChallengeById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChallengeById.fulfilled, (state, action: PayloadAction<SingleChallenge>) => {
        state.loading = false;
        state.challenge = action.payload;  // Correctly typed to SingleChallenge
      })
      .addCase(fetchChallengeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch challenge";
      })
      .addCase(createChallenge.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(createChallenge.fulfilled, (state) => {
        state.loading = false;
        state.success = true; 
      })
      .addCase(createChallenge.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
        state.success = false;
      });
  },
});

export default challengesSlice.reducer;
