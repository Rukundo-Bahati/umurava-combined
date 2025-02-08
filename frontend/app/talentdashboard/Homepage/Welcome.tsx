import React from 'react';
import { Eye } from 'lucide-react';

const Welcome = () => {
  return (
    <div className="mt-20  p-4 mx-auto w-full flex flex-col relative bg-gray-50 rounded-lg sm:h-40 md:h-48 lg:h-56">
      <div className="flex justify-between items-center w-full">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Welcome back, Hilaire,</h2>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg font-semibold text-gray-700">
            Build Work Experience through skills challenge
          </p>
        </div>

        <button className="bg-blue-600 text-white py-3 px-4 sm:px-5 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center">
          <Eye className="mr-2" />
          View Profile
        </button>
      </div>
    </div>
  );
};

export default Welcome;
