import React, { Suspense, lazy, memo } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import './App.css';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Destinations = lazy(() => import('./pages/Destinations'));
const DestinationDetail = lazy(() => import('./pages/DestinationDetail'));
const Packages = lazy(() => import('./pages/Packages'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading spinner
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 to-white">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600 font-medium">Loading...</p>
    </div>
  </div>
);

function App() {
  const location = useLocation();

  return (
    <div className="bg-white min-h-screen text-dark font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      
      <Suspense fallback={<PageLoader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/destinations" element={<PageTransition><Destinations /></PageTransition>} />
            <Route path="/destination/:id" element={<PageTransition><DestinationDetail /></PageTransition>} />
            <Route path="/packages" element={<PageTransition><Packages /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      
      <BackToTop />
      <Footer />
    </div>
  );
}

// Page Transition Wrapper - simplified for performance
const PageTransition = memo(({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.div>
));

// Footer Component - memoized
const Footer = memo(() => (
  <footer className="bg-gray-50 border-t border-gray-200 py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="/logo.png" 
              alt="Fly Daddy Logo" 
              className="h-10 w-auto object-contain"
            />
            <h3 className="text-3xl font-black text-blue-600 tracking-tight">
              Fly Daddy Tours & Travels
            </h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Hyderabad's premier travel agency. Your trusted partner for unforgettable journeys across India and around the world.
          </p>
          <div className="flex items-center gap-2 mb-4">
            <Star className="text-amber-500 fill-amber-500" size={16} />
            <span className="text-dark font-bold">4.9/5</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 text-sm">1000+ Reviews</span>
          </div>
        </div>

        <div>
          <h4 className="text-dark font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-3 text-gray-600">
            <li><a href="/" className="hover:text-blue-600 transition-colors font-medium">Home</a></li>
            <li><a href="/destinations" className="hover:text-blue-600 transition-colors font-medium">Destinations</a></li>
            <li><a href="/packages" className="hover:text-blue-600 transition-colors font-medium">Tour Packages</a></li>
            <li><a href="/about" className="hover:text-blue-600 transition-colors font-medium">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-600 transition-colors font-medium">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-dark font-bold text-lg mb-4">Popular Destinations</h4>
          <ul className="space-y-3 text-gray-600">
            <li><a href="/destinations" className="hover:text-blue-600 transition-colors font-medium">Kerala Backwaters</a></li>
            <li><a href="/destinations" className="hover:text-blue-600 transition-colors font-medium">Rajasthan Heritage</a></li>
            <li><a href="/destinations" className="hover:text-blue-600 transition-colors font-medium">Dubai Luxury</a></li>
            <li><a href="/destinations" className="hover:text-blue-600 transition-colors font-medium">Bali Paradise</a></li>
            <li><a href="/destinations" className="hover:text-blue-600 transition-colors font-medium">Maldives Escape</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-dark font-bold text-lg mb-4">Get in Touch</h4>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center gap-3">
              <span className="text-2xl">📞</span>
              <a href="tel:+919951125818" className="hover:text-blue-600 transition-colors font-medium">+91 9951125818</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-2xl">✉️</span>
              <a href="mailto:contact@flydaddytours.com" className="hover:text-blue-600 transition-colors font-medium">contact@flydaddytours.com</a>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">📍</span>
              <span className="font-medium text-sm">Sri Sai Mithai Mansion, 102, Himayat Nagar Rd, Hyderabad, Telangana 500029</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 font-medium text-center md:text-left text-sm">
          © 2024 Fly Daddy Tours & Travels. All rights reserved. | Proudly serving from Hyderabad 🇮🇳
        </p>
        <div className="flex gap-6 text-gray-600 font-medium text-sm">
          <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>
));

export default App;
