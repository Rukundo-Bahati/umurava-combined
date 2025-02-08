"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChallenges } from "@/store/challengesSlice";
import { RootState, AppDispatch } from "@/store/store";
import ChallengeCard from "./ChallengeCard";

interface ChallengeGridProps {
  viewChallengeUrl: string;
}

const ChallengesGrid: React.FC<ChallengeGridProps> = ({ viewChallengeUrl }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { challenges = [], loading, error } = useSelector(
    (state: RootState) => state.challenges
  );
;

  const [currentPage, setCurrentPage] = useState(1);
  const challengesPerPage = 6;
  const totalPages = challenges.length > 0 ? Math.ceil(challenges.length / challengesPerPage) : 1;

  useEffect(() => {
    if (challenges.length === 0 || error) {
      dispatch(fetchChallenges());
    }
  }, [dispatch, challenges.length, error]);

  const paginatedChallenges = challenges.slice(
    (currentPage - 1) * challengesPerPage,
    currentPage * challengesPerPage
  );

  return (
    <div className="p-6 bg-gray-50">
      {loading ? (
        <p className="text-center text-gray-600">Loading challenges...</p>
      ) : error ? (
        <p className="text-center text-red-600">Error: {error}</p>
      ) : challenges.length === 0 ? (
        <p className="text-center text-gray-600">No challenges available.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedChallenges.map((challenge: any) => (
              <ChallengeCard
                key={challenge._id}
                description={challenge.title}
                skills={challenge.skills && typeof challenge.skills === "string" ? challenge.skills.split(",") : []}
                seniority={challenge.level}
                timeline={challenge.timeline}
                viewChallengeUrl={viewChallengeUrl}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="mt-6 flex justify-between">
            <button
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChallengesGrid;
