import Footer from "./footer";
import Header from "./Header";
import StorySection from "./hero";
import ProblemsCard from "./Problems";
import SkillsChallengeSection from "./SkillChallenge";

export default function Home() {
  return (
    <>
      <Header />
      <StorySection />
      <ProblemsCard />
      <SkillsChallengeSection />
      <Footer />
    </>
  );
}