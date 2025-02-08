import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Dispatch } from 'redux';

const API_URL = "http://localhost:5000/api/challenges";

// Define action types
export const CREATE_CHALLENGE_REQUEST = 'CREATE_CHALLENGE_REQUEST';
export const CREATE_CHALLENGE_SUCCESS = 'CREATE_CHALLENGE_SUCCESS';
export const CREATE_CHALLENGE_FAILURE = 'CREATE_CHALLENGE_FAILURE';

export const FETCH_CHALLENGE_REQUEST = 'FETCH_CHALLENGE_REQUEST';
export const FETCH_CHALLENGE_SUCCESS = 'FETCH_CHALLENGE_SUCCESS';
export const FETCH_CHALLENGE_FAILURE = 'FETCH_CHALLENGE_FAILURE';

export interface FetchChallengeRequestAction {
  type: typeof FETCH_CHALLENGE_REQUEST;
}

export interface FetchChallengeSuccessAction {
  type: typeof FETCH_CHALLENGE_SUCCESS;
  payload: any;
}

export interface FetchChallengeFailureAction {
  type: typeof FETCH_CHALLENGE_FAILURE;
  payload: any;
}

export type ChallengeActionTypes =
  | FetchChallengeRequestAction
  | FetchChallengeSuccessAction
  | FetchChallengeFailureAction
  | CreateChallengeRequestAction
  | CreateChallengeSuccessAction
  | CreateChallengeFailureAction
  | CreateChallengeRequestAction
  | CreateChallengeSuccessAction
  | CreateChallengeFailureAction;

export interface CreateChallengeRequestAction {
    type: typeof CREATE_CHALLENGE_REQUEST;
  }
  
  export interface CreateChallengeSuccessAction {
    type: typeof CREATE_CHALLENGE_SUCCESS;
    payload: any;
  }
  
  export interface CreateChallengeFailureAction {
    type: typeof CREATE_CHALLENGE_FAILURE;
    payload: any;
  }
  
// Define the shape of the challenge data for type safety
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

export const createChallenge = createAsyncThunk(
  "challenges/create",
  async (challengeData: ChallengeData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/challenges/create", challengeData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response ? error.response.data.message : "An Axios error occurred");
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);
  

// Modified fetchChallenges to accept challengeId
export const fetchChallengeById = createAsyncThunk<Challenge[], string>(
  "challenges/fetchById",
  async (challengeId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/challenges/${challengeId}`);
      return response.data; // Assume this is a single challenge
    } catch (error) {
      return rejectWithValue(
        axios.isAxiosError(error) ? error.response?.data.message : "An unexpected error occurred"
      );
    }
  }
);

