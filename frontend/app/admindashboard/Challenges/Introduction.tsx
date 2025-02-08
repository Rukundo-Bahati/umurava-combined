"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { fetchChallenges } from "@/store/challengesSlice";

const IntroStats: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { challenges, loading, error } = useSelector(
    (state: RootState) => state.challenges
  );
  const router = useRouter();

  useEffect(() => {
    if (!challenges || challenges.length === 0) {
      dispatch(fetchChallenges());
    }
  }, [dispatch, challenges]);

  const validChallenges = Array.isArray(challenges) ? challenges : [];

  const counts = {
    all: validChallenges.length,
    open: validChallenges.filter((challenge) => challenge.status?.toLowerCase() === "open").length,
    completed: validChallenges.filter((challenge) => challenge.status?.toLowerCase() === "completed").length,
    ongoing: validChallenges.filter((challenge) => challenge.status?.toLowerCase() === "ongoing").length,
  };

  const filters = [
    { label: "All Challenges", count: counts.all },
    { label: "Completed Challenges", count: counts.completed },
    { label: "Open Challenges", count: counts.open },
    { label: "Ongoing Challenges", count: counts.ongoing },
  ];

  const navigateToCreateChallenge = () => {
    router.push("/admindashboard/CreateChallenge");
  };

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
        <div className="flex gap-4">
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
          <div onClick={navigateToCreateChallenge}>
            <Button className="bg-blue-600 hover:bg-blue-800 text-lg py-4 px-6 h-16 duration-250">
              <Plus className="w-10 h-10 mr-3" />
              Create New Challenge
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntroStats;
