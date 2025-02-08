import Footer from "./footer";
import Header from "./Header";
import HeroSection from "./Hero";
import KeyOfferings from "./Benefits";
import PartnersSetion from "./Partners";
import SkillsIntegration from "./SkillsIntegration";
import CTASection from "./CTAButton";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <KeyOfferings />

      <PartnersSetion />
      <SkillsIntegration />
      <CTASection />
      <Footer />
    </>
  );
}
