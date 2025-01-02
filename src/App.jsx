import "./App.css";
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
                <SchoolArchitecture/>
                <EduTech/>
                <EduProg/>
                <EduStrategies/>
                <TeacherTraining/>
                <EduMaterials/>
                <Advantages/>
                <ContactUs/>
                <LogoCarouselPage/>
            </div>
        </>
    );
}

export default App;
