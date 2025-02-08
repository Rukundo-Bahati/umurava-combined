import React from "react";
import Header from "../../CommomComponents/Header";
import ChallengesFilter from "./ChallengesFilter";
import ChallengesGrid from "../../CommomComponents/ChallengesGrid";

const Hackathon = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <Header />
        <ChallengesFilter />
        <ChallengesGrid viewChallengeUrl={""} />
      </div>
    </div>
  );
};

export default Hackathon;
