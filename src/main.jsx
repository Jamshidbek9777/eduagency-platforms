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
import EduMaterials from "./pages/eduMaterials.jsx";
import AcademicTour from "./pages/academicTour.jsx";
import EducationModels from "./pages/eduModels.jsx";
import EducationDesign from "./pages/eduDesign.jsx";
import EducationTechnologies from "./pages/eduTech.jsx";
import Accredation from "./pages/accredation.jsx";
import StudyTurkey from "./pages/studyTurkey.jsx";
import StudyUz from "./pages/studyUzb.jsx";
import Seminars from "./pages/seminars.jsx";
import Exhibitions from "./pages/exhibitions.jsx";
import Kindergartens from "./pages/kgardens.jsx";
import ElementarySchool from "./pages/elemantarySchool.jsx";
import IntermediateSchools from "./pages/intermediateSchools.jsx";
import HighSchools from "./pages/highSchools.jsx";
import Universities from "./pages/universities.jsx";
import ScrollToTop from "./components/scrollToTop.js";
import Ozel from "./pages/ozel.jsx";
import StudyCenter from "./pages/studyCenter.jsx";

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
              <Route path="/eduModels" element={<EducationModels />} />
              <Route path="/eduStrategies" element={<EducationStrategies />} />
              <Route path="/education-design" element={<EducationDesign />} />
              <Route
                path="/education-technologies"
                element={<EducationTechnologies />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/teacherTrainings" element={<TeacherTrainings />} />
              <Route path={"/edu-materials"} element={<EduMaterials />} />
              <Route path={"/academic-tour"} element={<AcademicTour />} />
              <Route path="/accredation" element={<Accredation />} />
              <Route path="/study-turkey" element={<StudyTurkey />} />
              <Route path="/study-uz" element={<StudyUz />} />
              <Route path="/seminars" element={<Seminars />} />
              <Route path="/exhibitons" element={<Exhibitions />} />
              <Route path="/kindergartens" element={<Kindergartens />} />
              <Route path="/elementary-school" element={<ElementarySchool />} />
              <Route
                path="/intermediate-school"
                element={<IntermediateSchools />}
              />
              <Route path="/high-schools" element={<HighSchools />} />
              <Route path="/universities" element={<Universities />} />
              <Route path="/ozel" element={<Ozel />} />
              <Route path="/study-center" element={<StudyCenter />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </NextUIProvider>
      </LanguageProvider>
    </>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
