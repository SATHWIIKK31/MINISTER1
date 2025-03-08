import React from 'react';
import { Link } from 'react-router-dom';
import { User, LogIn, Brain } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full px-6 py-4 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-md bg-white/10 rounded-2xl px-6 py-3 flex items-center justify-between shadow-lg border border-white/20">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-indigo-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
              Minister AI
            </span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/about" className="text-white/90 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/" className="text-white/90 hover:text-white transition-colors">
              Try Minister
            </Link>
            <Link to="/login" className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors">
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors">
              <User className="w-4 h-4" />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;