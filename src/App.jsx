import Cards from "./components/cards";
import HeroSection from "./components/hero";
import Numbers from "./components/numbers";
import Partners from "./components/partners";
import Services from "./components/services";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <h1>Salom</h1>
        <HeroSection />
        <Numbers />
        <Cards />
        <Services />
        <Partners />
      </div>
    </>
  );
}

export default App;
