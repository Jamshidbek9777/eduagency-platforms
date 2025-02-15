import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { LanguageProvider } from "./context/language.jsx";

import App from "./App.jsx";
import "./index.css";

import Navbar from "./components/navbar.jsx";
import About from "./pages/about.jsx";
import Footer from "./components/footer.jsx";
import Contact from "./pages/contact.jsx";
import EducationStrategies from "./pages/eduStr.jsx";
import TeacherTrainings from "./pages/teacherTraining.jsx";
import AcademicTour from "./pages/academicTour.jsx";
import EducationModels from "./pages/eduModels.jsx";
import EducationDesign from "./pages/eduDesign.jsx";
import EducationTechnologies from "./pages/eduTech.jsx";
import StudyTurkey from "./pages/studyTurkey.jsx";
import StudyUz from "./pages/studyUzb.jsx";
import Kindergartens from "./pages/kgardens.jsx";
import ElementarySchool from "./pages/elemantarySchool.jsx";
import IntermediateSchools from "./pages/intermediateSchools.jsx";
import HighSchools from "./pages/highSchools.jsx";
import Universities from "./pages/universities.jsx";
import ScrollToTop from "./components/scrollToTop.js";
import Partnership from "./pages/partnership.jsx";
import Denklik from "./pages/denklik.jsx";
import Management from "./pages/management.jsx";
import EPlatforms from "./pages/e-platforms.jsx";
import EGames from "./pages/e-games.jsx";
import Modernizations from "./pages/modernizations.jsx";
import Digital from "./pages/digital.jsx";

const Root = () => {
  return (
    <>
      <LanguageProvider>
        <NextUIProvider>
          <BrowserRouter>
            <Navbar />
            <ScrollToTop />
            <Routes className="min-h-screen">
              <Route path="/" element={<App />} />
              <Route path="/modernization" element={<Modernizations />} />
              <Route path="/eduStrategies" element={<EducationStrategies />} />
              <Route path="/education-design" element={<EducationDesign />} />
              <Route
                path="/education-technologies"
                element={<EducationTechnologies />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/teacherTrainings" element={<TeacherTrainings />} />
              <Route path="/academic-tour" element={<AcademicTour />} />
              <Route path="/partnership" element={<Partnership />} />
              <Route path="/study-turkey" element={<StudyTurkey />} />
              <Route path="/study-uz" element={<StudyUz />} />
              <Route path="/kindergartens" element={<Kindergartens />} />
              <Route path="/elementary-school" element={<ElementarySchool />} />
              <Route
                path="/intermediate-school"
                element={<IntermediateSchools />}
              />
              <Route path="/high-schools" element={<HighSchools />} />
              <Route path="/universities" element={<Universities />} />
              <Route path="/denlik" element={<Denklik />} />

              {/* eduTech */}
              <Route path="/management" element={<Management />} />
              <Route path="/e-platforms" element={<EPlatforms />} />
              <Route path="/e-games" element={<EGames />} />
              <Route path="/digital" element={<Digital />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </NextUIProvider>
      </LanguageProvider>
    </>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
