"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChallenges } from "../../store/challengesSlice";
import { RootState, AppDispatch } from "../../store/store";
import ChallengeCard from "./ChallengeCard";
import Link from "next/link";

const RecentChallenges: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { challenges = [], loading, error } = useSelector(
    (state: RootState) => state.challenges 
  );

  useEffect(() => {
    dispatch(fetchChallenges());
  }, [dispatch]);

  if (loading) {
    return <p className="text-center text-gray-600">Loading challenges...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  if (!challenges || challenges.length === 0) {
    return <p className="text-center text-gray-600">No challenges found.</p>;
  }

  return (
    <div className="p-8 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Recent Challenges</h1>
        <Link href="/challenges" className="text-blue-600 hover:underline text-lg">
          See all
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {challenges.length > 0 ? (
          challenges.map((challenge) => (
            <ChallengeCard
              key={challenge._id}
              description={challenge.title}
              skills={challenge.skills && typeof challenge.skills === "string" ? challenge.skills.split(",") : []}
              seniority={challenge.level}
              timeline={challenge.timeline}
            />
          ))
        ) : (
          <p className="text-gray-600">No challenges available.</p>
        )}
      </div>
    </div>
  );
};

export default RecentChallenges;
