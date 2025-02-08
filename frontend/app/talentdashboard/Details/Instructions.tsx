import React from "react";
import {
  Calendar,
  BriefcaseBusiness,
  Mail,
  CircleDollarSign,
} from "lucide-react";

const Instructions: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <section className={`bg-white p-6 rounded-lg shadow-md  ${className}`}>
      <h2 className="text-xl font-bold mb-4">Key Instructions</h2>
      <p className="mb-4 ">
        You are free to schedule a clarification call with the team via this:
        <Mail />
        <a
          href="mailto:talent@umurava.africa"
          className="text-blue-600 hover:underline"
        >
          talent@umurava.africa
        </a>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center">
          <BriefcaseBusiness />
          <span className="font-bold">Category:</span> Web Design
        </div>
        <div className="flex items-center">
          <Calendar />
          <span className="font-bold">Duration:</span> 7 Days
        </div>
        <div className="flex items-center">
          <CircleDollarSign />
          <span className="font-bold">Prize:</span> $150 - $400
        </div>
      </div>
      <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Submit Your Work
      </button>
    </section>
  );
};

export default Instructions;
