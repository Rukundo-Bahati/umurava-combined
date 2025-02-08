import React from "react";
import { NotebookText } from "lucide-react";

interface CardProps {
  title: string;
  number: number;
}

const Card: React.FC<CardProps> = ({ title, number }) => {
  return (
    <div className="relative flex h-auto flex-col bg-white rounded-lg border shadow-md hover:shadow-xl transition-shadow duration-200 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 md:p-6">
      {/* Left Border Indicator */}
      <div className="absolute left-0 top-2 bottom-2 bg-blue-600 w-2 rounded"></div>

      {/* Title */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">{title}</h3>
      </div>

      {/* Number Section */}
      <div className="flex items-center justify-between mt-4">
        <p className="text-2xl md:text-3xl font-bold text-gray-800">{number}</p>

        {/* Icon */}
        <div className="bg-blue-200 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
          <NotebookText className="text-blue-400 w-5 h-5 md:w-6 md:h-6" />
        </div>
      </div>
    </div>
  );
};

export default Card;
