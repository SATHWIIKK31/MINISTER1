import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-blue-900">
          <div className="relative z-10">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
          {/* RGB Glow Effects */}
          <div className="fixed inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[80px] animate-pulse delay-700"></div>
            <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-red-500/20 rounded-full blur-[90px] animate-pulse delay-1000"></div>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
