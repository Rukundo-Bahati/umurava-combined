"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";

interface NavigationBarProps {
  onGoBack: () => void;
  title: string;
  actionText: string;
  onActionClick: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  onGoBack,
  title,
  actionText,
  onActionClick,
}) => {
  return (
    <nav className="fixed top-16 mb-3 w-full bg-white border-b px-8 py-5 
    flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        
        {/* Go Back Button */}
        <button
          onClick={onGoBack}
          className="flex items-center text-sm text-gray-700 hover:text-gray-900 
          transition duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="ml-2 font-medium">Go Back</span>
        </button>

        {/* Title with Separator */}
        <span className="text-gray-400">/</span>
        <span className="text-sm font-semibold text-gray-800">{title}</span>
        <span className="text-gray-400">/</span>

        {/* Action Button */}
        <button
          onClick={onActionClick}
          className="text-sm font-medium text-blue-600 hover:underline 
          transition duration-200"
        >
          {actionText}
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
