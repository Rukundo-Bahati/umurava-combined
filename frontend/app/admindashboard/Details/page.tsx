
"use client";
import Details from "./Details";
import React, { useState } from "react";
import Homepage from "../Homepage/Homepage";
import Hackathon from "@/app/talentdashboard/Hackathon/Hackathon";
import Modal from "@/app/talentdashboard/Community/Modal";

const Home = () => {
  const [activePage, setActivePage] = useState("Challenges & Hackathons");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigation = (page: string) => {
    if (page === "Community") {
      setIsModalOpen(true); 
    } else {
      setActivePage(page); 
    }
  };

  return (
    <Details activePage={activePage} onNavigate={handleNavigation}>
      {activePage === "Dashboard" && <Homepage />}
      {activePage === "Challenges & Hackathons" && <Hackathon />}
      {activePage === "Details" && <Details children={undefined} activePage={""} onNavigate={function (page: string): void {
        throw new Error("Function not implemented.");
      } } />}{" "}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Details>
  );
};

export default Home;