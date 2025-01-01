import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./context/language.jsx";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import Navbar from "./components/navbar.jsx";
import About from "./pages/about.jsx";
import Footer from "./components/footer.jsx";
import TeachingTech from "./pages/teachingTech.jsx";
import CosmicServices from "./pages/cosmicServices.jsx";
import Labaratories from "./pages/labaratories.jsx";
import Academy from "./pages/academy.jsx";
import EducationDesign from "./pages/edudesign.jsx";
import Transfer from "./pages/transfer.jsx";

import App from "./App.jsx";
import "./index.css";
import Contact from "./pages/contact.jsx";
import K12net from "./pages/k12net.jsx";
import OkulAile from "./pages/okulaile.jsx";
import MentaulUp from "./pages/mentalup.jsx";
import OkulMimari from "./pages/okul.jsx";
import EgitimTech from "./pages/egitimTech.jsx";
import EducationPrograms from "./pages/egitimProg.jsx";
import EducationStrategies from "./pages/egitimModel.jsx";
import TeacherTrainings from "./pages/teacherTraining.jsx";
import EduMaterials from "./pages/eduMaterials.jsx";
import AcademicTour from "./pages/academicTour.jsx";
const Root = () => {
  return (
      <>
        <LanguageProvider>
          <NextUIProvider>
            <BrowserRouter>
              <Navbar/>
              <Routes className="min-h-screen">
                <Route path="/" element={<App/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/okul-mimari" element={<OkulMimari/>}/>
                <Route path="/egitim-tech" element={<EgitimTech/>}/>
                <Route path={'egitim-program'} element={<EducationPrograms/>}/>
                <Route path="/teachingTech" element={<TeachingTech/>}/>
                <Route path="/cosmic-services" element={<CosmicServices/>}/>
                <Route path="/labaratories" element={<Labaratories/>}/>
                <Route path="/academy" element={<Academy/>}/>
                <Route path="/transfer" element={<Transfer/>}/>
                <Route path="/edu-design" element={<EducationDesign/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/k12net" element={<K12net/>}/>
                <Route path="/okulaile" element={<OkulAile/>}/>
                <Route path="/mental-up" element={<MentaulUp/>}/>
                <Route path="/education-strategies" element={<EducationStrategies/>}/>
                <Route path="/teacherTrainings" element={<TeacherTrainings/>}/>
                <Route path={'/edu-materials'} element={<EduMaterials/>}/>
                <Route path={'/academic-tour'} element={<AcademicTour/>}/>
              </Routes>
            </BrowserRouter>
            <Footer/>
          </NextUIProvider>
        </LanguageProvider>
      </>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
