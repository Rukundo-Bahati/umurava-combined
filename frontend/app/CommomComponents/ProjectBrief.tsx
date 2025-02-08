import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Layout, Calendar, DollarSign } from "lucide-react";

interface ProjectBriefProps {
  className?: string; 
}

export default function ProjectBrief({ className }: ProjectBriefProps) {
  return (
    <div className={`max-w-7xl mx-auto p-6 ${className}`}>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-[#2B71F0] p-8 rounded-lg flex items-center justify-center">
            <div className="flex flex-col items-center">
              <img
                src="/images/logo1.png"
                alt="Umurava Logo"
                className="w-[100px] h-[91px]"
              />
              <h2 className="text-white font-bold mt-4 text-3xl">Umurava</h2>
            </div>
          </div>

          {/* Project Title */}
          <h2 className="text-xl font-bold">Project Brief: Payroll and HR Management System</h2>
          <p className="text-gray-700">
            A Fintech company developing a digital financial platform designed for businesses 
            and their workforce in Africa. They are partnering with Umurava to run a skills 
            challenge for product design. This challenge focuses on creating a payroll 
            management system for employers and financial services for employees and gig workers across Africa.
          </p>

          {/* Project Requirements */}
          <h2 className="text-lg font-bold mt-4">Project Requirements</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>UX research to understand project requirements</li>
            <li>Understand user needs and business goals</li>
            <li>Determine interactions between users</li>
            <li>Requirements catalog</li>
          </ul>

          {/* Project Design */}
          <h2 className="text-lg font-bold mt-4">Project Design</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>User Interface Design for each step.</li>
            <li>Creating Wireframes to outline the basic structure and layout of the web.</li>
            <li>Designing visually appealing and user-friendly interfaces.</li>
            <li>Ensuring responsiveness across web, mobile, and tablet devices.</li>
            <li>Providing a feedback session for in-development guidance.</li>
          </ul>

          {/* Deliverables */}
          <h2 className="text-lg font-bold mt-4">Deliverables</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Requirements Catalog and User Interaction Diagram.</li>
            <li>User Interface Mockups.</li>
            <li>Payroll and HR System Design Completed.</li>
            <li>Final project submission to the client.</li>
          </ul>

          {/* Note */}
          <h2 className="text-lg font-bold mt-4">NOTE:</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Find Product Requirements Summary and Features Description for Saway Pay here.</li>
          </ul>
        </div>

        {/* Sidebar */}
        <div className="bg-gray-50 p-6 rounded-lg h-fit w-full shadow-md">
          <h2 className="font-semibold text-lg mb-4">Key Instructions</h2>
          <p className="text-sm text-gray-600 mb-6">
            You are free to schedule a clarification call with the team via this
          </p>

          {/* Contact Details */}
          <div className="space-y-4">
            {[ 
              { icon: Mail, label: "talent@umurava.africa", sub: "Contact Email" },
              { icon: Layout, label: "Web design", sub: "Challenge Category" },
              { icon: Calendar, label: "7 Days", sub: "Duration" },
              { icon: DollarSign, label: "$150 - $400", sub: "Money Prize" }
            ].map(({ icon: Icon, label, sub }, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">{label}</p>
                  <p className="text-sm text-gray-500">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <Button className="w-full mt-6 bg-[#2B71F0] hover:bg-blue-700">
            Submit your work
          </Button>
        </div>
      </div>
    </div>
  );
}
