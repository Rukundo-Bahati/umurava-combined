import React from "react";

const Welcome = () => {
  return (
    <div className="mt-10 md:mt-20 mx-4 p-4 lg:w-[1200px] flex flex-col bg-gray-50 rounded-lg h-auto md:h-30">
      <div>
        <h2 className="text-xl md:text-3xl font-bold text-gray-800">
          Welcome back, Hilaire,
        </h2>
        <p className="mt-2 md:mt-4 text-base md:text-lg font-medium text-gray-700">
          Build Work Experience through skills challenge
        </p>
      </div>
    </div>
  );
};

export default Welcome;
