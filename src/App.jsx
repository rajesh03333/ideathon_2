import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Latest from "./pages/Latest";
import Profile from "./pages/Profile";
import LanguageSelection from "./pages/LanguageSelection";
import Login from "./pages/Login";
import OTPVerification from "./pages/OTPVerification";
import DetailsForm from "./pages/DetailsForm";

function Footer() {
  const location = useLocation();

  // Define routes where the footer should not appear
  const noFooterRoutes = ["/", "/Login", "/otp", "/detailsentry"];

  // Check if the current route is in the noFooterRoutes array
  if (noFooterRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <footer className="fixed bottom-0 w-full bg-blue-500 p-4 flex justify-around text-white">
      <Link to="/home" className="flex flex-col items-center">
        <span>🏠</span>
        <span>Home</span>
      </Link>
      <Link to="/about" className="flex flex-col items-center">
        <span>🌱</span>
        <span>Crop Recommandation</span>
      </Link>
      <Link to="/services" className="flex flex-col items-center">
        <span>⚒️</span>
        <span>Services</span>
      </Link>
      <Link to="/latest" className="flex flex-col items-center">
        <span>🔥</span>
        <span>Latest</span>
      </Link>
      <Link to="/profile" className="flex flex-col items-center">
        <span>👤</span>
        <span>Profile</span>
      </Link>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col items-center">
        <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
          <div className="text-xl font-bold flex items-center">
            <span className="mr-2">🌳</span> TeamAlpha
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<LanguageSelection />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/otp" element={<OTPVerification />} />
          <Route path="/detailsentry" element={<DetailsForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
