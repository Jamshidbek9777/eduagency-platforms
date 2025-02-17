import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { LanguageProvider } from "./context/language.jsx";

import App from "./App.jsx";
import "./index.css";

import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import ScrollToTop from "./components/scrollToTop.js";

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
            </Routes>
          </BrowserRouter>
          <Footer />
        </NextUIProvider>
      </LanguageProvider>
    </>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
