
"use client";
import Details from "./Details";
import React, { useState } from "react";
import Homepage from "../Homepage/Homepage";
import Hackathon from "../Hackathon/Hackathon";
import Modal from "../Community/Modal";

const Home = () => {
  const [activePage, setActivePage] = useState("Challenges & Hackathons");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigation = (page: string) => {
    if (page === "Community") {
      setIsModalOpen(true); // Open modal when Community is clicked
    } else {
      setActivePage(page); // Set active page when other links are clicked
    }
  };

  return (
    <Details activePage={activePage} onNavigate={handleNavigation}>
      {activePage === "Dashboard" && <Homepage />}
      {activePage === "Challenges & Hackathons" && <Hackathon />}
      {activePage === "Details" && <Details children={undefined} activePage={""} onNavigate={function (page: string): void {
        throw new Error("Function not implemented.");
      } } />}{" "}
      {/* You can add content here for "Details" */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Details>
  );
};

export default Home;