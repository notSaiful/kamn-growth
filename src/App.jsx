import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SazoArchSvgDef from './components/SazoArch';
import GlobalAmbientBackground from './components/GlobalAmbientBackground';
import { AudioProvider } from './context/AudioContext';

// All 15 Route Pages
import HomePage from './pages/HomePage';
import WhatWeCarryPage from './pages/WhatWeCarryPage';
import GrowthPage from './pages/GrowthPage';
import ProcurementPage from './pages/ProcurementPage';
import OperationsPage from './pages/OperationsPage';
import AiSystemsPage from './pages/AiSystemsPage';
import ApproachPage from './pages/ApproachPage';
import ResultsPage from './pages/ResultsPage';
import AboutPage from './pages/AboutPage';
import JournalPage from './pages/JournalPage';
import PartnershipPage from './pages/PartnershipPage';
import BeginPage from './pages/BeginPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

// Auto-scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <AudioProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen relative text-[#29251F] selection:bg-[#DECDB6] selection:text-[#29251F] flex flex-col justify-between overflow-x-hidden">
          
          {/* Global Ambient Background Video (Warm Clouds Drift across entire website except Hero) */}
          <GlobalAmbientBackground />

          {/* Global Signature SAZO Arch SVG Definitions */}
          <SazoArchSvgDef />

          {/* Universal Multi-Page Architectural Navigation */}
          <Navbar />

        {/* Dynamic Multi-Page Router */}
        <main className="flex-grow relative z-10">
          <Routes>
            {/* 1. Home */}
            <Route path="/" element={<HomePage />} />

            {/* 2. What We Carry (Services Overview) */}
            <Route path="/services" element={<WhatWeCarryPage />} />

            {/* 3. Growth */}
            <Route path="/services/growth" element={<GrowthPage />} />

            {/* 4. Procurement */}
            <Route path="/services/procurement" element={<ProcurementPage />} />

            {/* 5. Operations */}
            <Route path="/services/operations" element={<OperationsPage />} />

            {/* 6. AI Systems */}
            <Route path="/services/ai-systems" element={<AiSystemsPage />} />

            {/* 7. How We Work / Approach */}
            <Route path="/approach" element={<ApproachPage />} />

            {/* 8. Results */}
            <Route path="/results" element={<ResultsPage />} />

            {/* 9. About & Amanah */}
            <Route path="/about" element={<AboutPage />} />

            {/* 10. Journal */}
            <Route path="/journal" element={<JournalPage />} />

            {/* 11. Partnership Models */}
            <Route path="/partnership" element={<PartnershipPage />} />

            {/* 12. Begin (Executive Intake) */}
            <Route path="/begin" element={<BeginPage />} />

            {/* 13. Privacy */}
            <Route path="/privacy" element={<PrivacyPage />} />

            {/* 14. Terms */}
            <Route path="/terms" element={<TermsPage />} />

            {/* Legacy URL Aliases Redirecting to Canonical Routes */}
            <Route path="/what-we-do" element={<Navigate to="/services" replace />} />
            <Route path="/how-it-works" element={<Navigate to="/approach" replace />} />
            <Route path="/why-kamn" element={<Navigate to="/about" replace />} />
            <Route path="/principles" element={<Navigate to="/about" replace />} />
            <Route path="/pricing" element={<Navigate to="/partnership" replace />} />

            {/* 15. Custom 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Universal Architectural Footer */}
        <Footer />

      </div>
    </Router>
  </AudioProvider>
  );
}
