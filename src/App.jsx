import Advantages from "./components/advantages";
import LogoCarouselPage from "./components/partners";
import SchoolArchitecture from "./components/schoolArchitecture.jsx";
import HeroSection from "./components/hero.jsx";
import AkademikTour from "./components/akademikTour.jsx";
import Symbols from "./components/symbols.jsx";
import Recommended from "./components/recommended.jsx";
import Reklama from "./components/rek.jsx";
import News from "./components/news.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Symbols />
        <HeroSection />
        <Recommended />
        <Reklama />
        <SchoolArchitecture />
        <AkademikTour />
        <Advantages />
        <News />
        <LogoCarouselPage />
      </div>
    </>
  );
}

export default App;
