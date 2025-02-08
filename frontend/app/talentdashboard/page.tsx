"use client"
import React, { useState } from "react";
import Homepage from "./Homepage/Homepage";
import Hackathon from "./Hackathon/Hackathon";
import Details from "./Details/Details";
import Modal from "./Community/Modal";
import DashboardLayout from "../CommomComponents/DashboardLayout";
import { useQuery } from "@tanstack/react-query";

const TalentDashboard = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigation = (page: string) => {
    if (page === "Community") {
      setIsModalOpen(true);
    } else {
      setActivePage(page);
    }
  };

  return (
    <DashboardLayout activePage={activePage} onNavigate={handleNavigation}>
      {activePage === "Dashboard" && <Homepage />}
      {activePage === "Challenges & Hackathons" && <Hackathon />}
      {activePage === "Community" && <Details children={undefined} activePage={""} onNavigate={function (page: string): void {
        throw new Error("Function not implemented.");
      } } />}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </DashboardLayout>
  );
};

export default TalentDashboard;
