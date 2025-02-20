import { Element } from "react-scroll";
import Cards from "./components/cards";
import HeroSection from "./components/hero";
import Numbers from "./components/numbers";
import Partners from "./components/partners";
import Services from "./components/services";
import Why from "./components/why";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <h1>Salom</h1>
        <HeroSection />
        <Numbers />
        <Cards />
        <Why />
        <Element name="services">
          <Services />
        </Element>
        <Partners />
      </div>
    </>
  );
}

export default App;
