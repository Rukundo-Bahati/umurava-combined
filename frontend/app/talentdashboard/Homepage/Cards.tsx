import React, { useEffect } from 'react';
import Card from './Card';
import { useDispatch, useSelector } from "react-redux";
import { fetchChallenges } from "@/store/challengesSlice";
import { RootState, AppDispatch } from "@/store/store";

const Cards = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Safely access the challenges state
  const { challenges = [], loading = false, error = null } = useSelector(
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

  return (
    <div className="mx-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
      <Card
        title="Completed Challenges"
        number={counts.completed}
      />
      <Card
        title="Open Challenges"
        number={counts.open}
      />
      <Card
        title="Ongoing Challenges"
        number={counts.ongoing}
      />
    </div>
  );
};

export default Cards;
