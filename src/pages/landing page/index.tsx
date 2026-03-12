import Hero from "../../components/hero/Hero";
import ChairmanWelcome from "../../components/chairman/ChairmanWelcome";
import History from "../../components/history/History";
import Events from "../../components/events/Events";
import Projects from "../../components/projects/Projects";
import News from "../../components/news/News";
import FinalCTA from "../../components/cta/FinalCTA";


const LandingPage = () => {
  return (
    <>
      <Hero />
      <ChairmanWelcome />
      <History />
      <Events />
      <Projects />
      <News />
      <FinalCTA />
    </>
  );
};

export default LandingPage;
