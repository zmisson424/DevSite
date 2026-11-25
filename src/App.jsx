import SiteHeader from "./components/SiteHeader/SiteHeader";
import SiteFooter from "./components/SiteFooter/SiteFooter";
import Hero from "./sections/Hero/Hero";
import DayJob from "./sections/DayJob/DayJob";
import PastRoles from "./sections/PastRoles/PastRoles";
import MyCompany from "./sections/MyCompany/MyCompany";
import Skills from "./sections/Skills/Skills";
import OffTheClock from "./sections/OffTheClock/OffTheClock";
import SayHi from "./sections/SayHi/SayHi";

/** The whole site is one long page, read top to bottom in chapters. */
function App() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
        <DayJob />
        <PastRoles />
        <MyCompany />
        <Skills />
        <OffTheClock />
        <SayHi />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
