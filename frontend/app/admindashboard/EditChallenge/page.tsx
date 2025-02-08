"use client";
import React from "react";
import NavigationBar from "../../CommomComponents/NavigationBar";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/app/CommomComponents/DashboardLayout";
import Edit from "./edit";

const EditChallenge: React.FC = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.push("/admindashboard/AdminDetails/admindetails");
  };

  const handleEditChallenge = () => {
    console.log("Edit New Challenge clicked");
  };

  return (
    <div>
      <DashboardLayout
        activePage="Challenges & Hackathons"
        onNavigate={handleGoBack}
      >
        <NavigationBar
          onGoBack={handleGoBack}
          title="Challenges & Hackathons"
          actionText="Edit Challenge"
          onActionClick={handleEditChallenge}
        />
        <Edit />
      </DashboardLayout>
    </div>
  );
};

export default EditChallenge;
