import React from "react";
import Header from "../../CommomComponents/Header";
import Welcome from "./Welcome";
import Cards from "./Cards";
import RecentChallenges from "../../CommomComponents/ChallengeCards";

const Homepage = () => {
  return (
    <div className="bg-gray-50">
      <div>
        <Welcome />
        <Cards />
        <RecentChallenges />
      </div>
    </div>
  );
};

export default Homepage;
