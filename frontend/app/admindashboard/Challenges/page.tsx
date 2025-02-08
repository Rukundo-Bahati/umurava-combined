"use client";
import React from "react";
import IntroStats from "./Introduction";
import ChallengesGrid from "@/app/CommomComponents/ChallengesGrid";

const Challenges = () => {
  return (
    <>
      <IntroStats />
      <ChallengesGrid viewChallengeUrl={"/admindashboard/Details"} />
    </>
  );
};

export default Challenges;
