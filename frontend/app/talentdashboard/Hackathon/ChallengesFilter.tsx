"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChallenges } from "@/store/challengesSlice";
import { RootState, AppDispatch } from "@/store/store";

const ChallengesFilter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Use the correct destructuring for the state shape
  const { challenges = [], loading, error } = useSelector(
    (state: RootState) => state.challenges || {} 
  );

  useEffect(() => {
    if (challenges.length === 0) {
      dispatch(fetchChallenges());
    }
  }, [dispatch, challenges]);

  const counts = {
    all: challenges.length,
    open: challenges.filter((challenge) => challenge.status.toLowerCase() === "open").length,
    completed: challenges.filter((challenge) => challenge.status.toLowerCase() === "completed").length,
    ongoing: challenges.filter((challenge) => challenge.status.toLowerCase() === "ongoing").length,
  };

  const filters = [
    { label: "All Challenges", count: counts.all },
    { label: "Completed Challenges", count: counts.completed },
    { label: "Open Challenges", count: counts.open },
    { label: "Ongoing Challenges", count: counts.ongoing },
  ];

  return (
    <div className="mt-16 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h1 className="text-xl font-bold text-gray-900 mb-2">Challenges</h1>
      <p className="text-sm text-gray-600 mb-4">
        Join a challenge or a hackathon to gain valuable work experience.
      </p>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-600">Error: {error}</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {filters.map((filter, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-blue-100 transition"
            >
              {filter.label}
              <span className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full">
                {filter.count}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChallengesFilter;
