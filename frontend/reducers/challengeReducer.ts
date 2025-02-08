import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchChallengeById, createChallenge } from "../store/challengeActions";

// Define Challenge Type
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

// Initial State
const initialState = {
  loading: false,
  challenge: [] as Challenge[],
  error: null as string | null,
  success: false,
};

// Create Slice
const challengeSlice = createSlice({
  name: "challenge",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle Fetch Challenges
      .addCase(fetchChallengeById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChallengeById.fulfilled, (state, action) => {
        state.loading = false;
        state.challenge = action.payload;
        state.success = true;
      })
      .addCase(fetchChallengeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch challenges";
        state.success = false;
      })
      // Handle Create Challenge
      .addCase(createChallenge.pending, (state) => {
        state.loading = true;
      })
      .addCase(createChallenge.fulfilled, (state, action) => {
        state.loading = false;
        state.challenge.push(action.payload); // Add new challenge to state
        state.success = true;
      })
      .addCase(createChallenge.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.success = false;
      });
  },
});

export default challengeSlice.reducer;
