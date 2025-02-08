import ChallengeCard from "./ChallengeCard";
import ChallengesGrid from "./ChallengesGrid";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";
import RecentChallenges from "./ChallengeCards";
import DashboardLayout from "./DashboardLayout";
import ProjectBrief from "./ProjectBrief";
export default function Home() {
  return (
    <>
      <Header />
      <NavigationBar
        onGoBack={function (): void {
          throw new Error("Function not implemented.");
        }}
        title={""}
        actionText={""}
        onActionClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Sidebar
        activePage={""}
        onNavigate={function (page: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <ChallengeCard
        description={""}
        skills={[]}
        seniority={""}
        timeline={""}
      />
      <ChallengesGrid viewChallengeUrl={""} />
      <RecentChallenges />
      <DashboardLayout
        children={undefined}
        activePage={""}
        onNavigate={function (page: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <ProjectBrief />
    </>
  );
}
