import Footer from "./footer";
import Header from "./Header";
import ChallengesPage from "./body";

export default function Home() {
  return (
    <>
      <Header />
      <ChallengesPage />
      <br className="bottom-28" />
      <Footer />
    </>
  );
}
