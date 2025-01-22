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
import K12net from "./pages/k12net.jsx";
import OkulAile from "./pages/okulaile.jsx";
import MentaulUp from "./pages/mentalup.jsx";
import EducationStrategies from "./pages/eduStr.jsx";
import TeacherTrainings from "./pages/teacherTraining.jsx";
import EduMaterials from "./pages/eduMaterials.jsx";
import AcademicTour from "./pages/academicTour.jsx";
import KindergardensPage from "./pages/kindergardens.jsx";
import EducationModels from "./pages/eduModels.jsx";

const Root = () => {
  return (
    <>
      <LanguageProvider>
        <NextUIProvider>
          <BrowserRouter>
            <Navbar />
            <Routes className="min-h-screen">
              <Route path="/" element={<App />} />
              <Route path="/eduModels" element={<EducationModels />} />
              <Route path="/eduStrategies" element={<EducationStrategies />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/k12net" element={<K12net />} />
              <Route path="/okulaile" element={<OkulAile />} />
              <Route path="/mental-up" element={<MentaulUp />} />
              <Route
                path="/education-strategies"
                element={<EducationStrategies />}
              />
              <Route path="/teacherTrainings" element={<TeacherTrainings />} />
              <Route path={"/edu-materials"} element={<EduMaterials />} />
              <Route path={"/academic-tour"} element={<AcademicTour />} />
              <Route path={"/kindergardens"} element={<KindergardensPage />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </NextUIProvider>
      </LanguageProvider>
    </>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
