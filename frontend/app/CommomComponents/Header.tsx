"use client";

import React, { useState } from "react";
import { Search, Bell } from "lucide-react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi"; // Mobile Menu Icon

const Header: React.FC<{ className?: string }> = ({ className }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Toggle search on mobile

  return (
    <header
    className={`fixed top-0 left-0 right-0 p-4 bg-white shadow-md z-50 ${className} md:left-[305px]`}>
      <div className="flex items-center justify-between">
        {/* Left Section - Mobile Menu & Search */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Icon */}
          <button className="md:hidden p-2 text-gray-700">
            <FiMenu size={24} />
          </button>

          <div
            className={`relative flex-1 ${
              isSearchOpen ? "w-full" : "hidden"
            } md:flex md:w-auto`}
          >
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={20}
            />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-gray-50 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>

          {/* Search Icon for Mobile */}
          {!isSearchOpen && (
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={24} />
            </button>
          )}
        </div>

        {/* Right Section - Notifications & Profile */}
        <div className="flex items-center space-x-4">
          {/* Notification Icon */}
          <div className="relative">
            <Bell className="text-gray-700 cursor-pointer" size={24} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </div>

          {/* Profile Image */}
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300">
            <Image
              src="/images/profile.png"
              alt="Profile"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
