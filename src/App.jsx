import Advantages from "./components/advantages";
import ContactUs from "./components/contactUs";
import LogoCarouselPage from "./components/partners";
import SchoolArchitecture from "./components/schoolArchitecture.jsx";
import EduTech from "./components/eduTech.jsx";
import EduProg from "./components/eduProg.jsx";
import HeroSection from "./components/hero.jsx";
import EduStrategies from "./components/eduStr.jsx";
import TeacherTraining from "./components/teacherTraining.jsx";
import EduMaterials from "./components/eduMaterials.jsx";
import AkademikTour from "./components/akademikTour.jsx";
import Symbols from "./components/symbols.jsx";
import Recommended from "./components/recommended.jsx";
import Reklama from "./components/rek.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Symbols />
        <HeroSection />
        <Recommended />
        <Reklama />
        <SchoolArchitecture />
        <EduTech />
        <EduProg />
        <EduStrategies />
        <TeacherTraining />
        <EduMaterials />
        <AkademikTour />
        <Advantages />
        <ContactUs />
        <LogoCarouselPage />
      </div>
    </>
  );
}

export default App;
