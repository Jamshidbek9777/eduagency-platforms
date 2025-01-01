import "./App.css";
import Advantages from "./components/advantages";
import { Carousel } from "./components/carousel";
import ContactUs from "./components/contactUs";
import LogoCarouselPage from "./components/partners";
import Edudesign from "./components/okul.jsx";
import TeachingTech from "./components/techingTech.jsx";
import Labs from "./components/labs.jsx";
import Academy from "./components/academy.jsx";
import Kosmosx from "./components/kosmosx.jsx";
import HeroSection from "./components/hero.jsx";

function App() {
    return (
        <>
            <div
                style={{
                    background:
                        "transparent linear-gradient(180deg, #d5f0f7 0%, #ffffff 100%) 0% 0% no-repeat padding-box",
                }}
                className="min-h-screen"
            >
                <HeroSection/>
                {/*<Carousel className="border-b"/>*/}
                {/* <WhoWeUs /> */}

                <Edudesign/>
                <TeachingTech/>
                <Labs/>
                {/*<Academy/>*/}
                {/*<Transfer/>*/}
                {/*<Kosmosx/>*/}
                <Advantages/>
                <ContactUs/>
                <LogoCarouselPage/>
            </div>
        </>
    );
}

export default App;
