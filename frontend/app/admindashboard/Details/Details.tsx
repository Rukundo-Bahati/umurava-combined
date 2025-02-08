"use client";

import React, { useState } from "react";
import Sidebar from "@/app/CommomComponents/Sidebar";
import Header from "../../CommomComponents/Header";
import ProjectBrief from "../../CommomComponents/ProjectBrief";
import { FiMenu } from "react-icons/fi";

interface DetailsProps {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
}

const Details: React.FC<DetailsProps> = ({
  children,
  activePage,
  onNavigate,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen">
      <div className="flex h-full">
        <div
          className={`fixed inset-y-0 left-0 z-50 transition-transform duration-300 md:relative md:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar activePage={activePage} onNavigate={onNavigate} />
        </div>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <div className="flex flex-col flex-1 overflow-scroll">
          <Header />
          <button
            className="absolute top-4 left-4 md:hidden p-2 bg-gray-800 text-white rounded-full z-50"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <FiMenu size={24} />
          </button>
          <div className="mt-[80px] px-6">
            <ProjectBrief />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Details;
