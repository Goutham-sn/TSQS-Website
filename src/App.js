import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Expertise from "./pages/Expertise";
import Academy from "./pages/Academy";
import AccessGenServices from "./pages/Accessgenservices";
import AccessGenProducts from "./pages/Accessgenproducts";
import Ebook from "./pages/Ebook";
import BusinessStrategy from "./pages/BusinessStrategy";
import TestPage from "./pages/TestPage";
import ContactUs from "./pages/ContactUs";
import ModelBasedTesting from "./pages/ModelBasedTesting";
import CodelessAutomation from "./pages/CodelessAutomation";
import ExpertiseDetailed from "./pages/ExpertiseDetailed";
import Learning from "./pages/Learning";
import BusinessModalDetailed from "./pages/BusinessModalDetailed";
import "./../src/App.css";
import QualityEng from "./pages/QualityEng";
import ConsentPreferences from "./pages/ConsentPreferences";
import AccessGen from "./pages/AccessGen";



function App() {
  return (
    <div className="App">
    <Router >
        <a href="#main-content" className="skip-link1">Skip to main content</a>
        <a href="#footer" className="skip-link1">Skip to footer</a>
      <Navbar />
      <div className="content">
      <main id="main-content" role="main" tabIndex="-1" className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quality-engineering" element={<QualityEng/>} />
          <Route path="/expertise" element={<Expertise/>}  />
          <Route path="/Academy" element={<Academy/>}   />
          <Route path="/e-book" element={<Ebook/>} />
          <Route path="/business-strategy" element={<BusinessStrategy />} />
          <Route path="/careers" element={<TestPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/modal-based-testing" element={<ModelBasedTesting />} />
          <Route path="/codeless-automation" element={<CodelessAutomation />} />
          <Route path="/expertise-detailed" element={<ExpertiseDetailed />}  />
          <Route path="/learning" element={<Learning />} />
          <Route path="/business-modal-detailed" element={<BusinessModalDetailed />} />
          <Route path="/accessibility" element={<AccessGen />} />
                    <Route path="/accessibility" element={<AccessGen />} />
          <Route path="/accessibility-services" element={<AccessGenServices />} />
          <Route path="/accessibility-products" element={<AccessGenProducts />} />
          <Route path="/accessgen" element={<Navigate to="/accessibility" replace />} />
        </Routes>
      </main>
      </div>
      <footer id="footer">
        <ConsentPreferences />
          <Footer />
        </footer>
    </Router>
    </div>
  );
}

export default App;
