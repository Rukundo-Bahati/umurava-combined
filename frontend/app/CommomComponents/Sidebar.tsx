import React from "react";
import { House, FileCheck, UserRoundPlus, Bolt, Headset, BriefcaseBusiness, LogOut } from "lucide-react";
import Image from "next/image";

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onNavigate }) => {
  return (
    <div className="flex flex-col justify-between h-screen w-70 bg-[#2B71F0] text-white p-5">
      <div>
        <div className="flex items-center mb-8">
          <Image
            src="/images/logo2.png"
            alt="Logo"
            className="ml-4 h-8 w-10"
            width={20}
            height={20}
          />
        </div>
        <ul className="space-y-2">
          {[
            { name: "Dashboard", icon: <House className="text-xl" /> },
            { name: "Challenges & Hackathons", icon: <FileCheck className="text-xl" /> },
            { name: "Community", icon: <UserRoundPlus className="text-xl" /> },
          ].map(({ name, icon }) => (
            <li
              key={name}
              onClick={() => onNavigate(name)}
              className={`flex items-center gap-3 p-3 rounded-lg 
                ${activePage === name ? "bg-white text-blue-700" : "hover:bg-blue-600"} 
                transition duration-200 cursor-pointer`}
            >
              {icon}
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-1">
        <ul className="space-y-1">
          {[
            { name: "Settings", icon: <Bolt className="text-lg" /> },
            { name: "Help Center", icon: <Headset className="text-lg" /> },
            { name: "Refer family & friends", icon: <BriefcaseBusiness className="text-lg" /> },
          ].map(({ name, icon }, index) => (
            <li
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition duration-200 cursor-pointer"
            >
              {icon}
              <span>{name}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 mt-6 p-3 rounded-lg hover:bg-blue-500 transition duration-200 cursor-pointer">
          <Image
            src="/images/profile.png"
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover"
            width={40}
            height={40}
          />
          <div className="flex-1">
            <p className="text-sm font-bold">Hilaire Sh</p>
            <p className="text-xs text-gray-200">hilaire@uidesign</p>
          </div>
          <LogOut className="text-lg cursor-pointer hover:text-blue-300" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
