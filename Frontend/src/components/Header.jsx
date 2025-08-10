import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../assets/uet-mardan-logo.png'; // Adjust the path as necessary

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Helper to check if a path is active
  const isActive = (path) => {
    // For hash links, check startsWith
    if (path.includes('#')) {
      return location.pathname + location.hash === path;
    }
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo}
              alt="UET Mardan Logo" 
              className="h-16 w-auto"
            />
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-gray-800">UET Mardan</h1>
              <p className="text-sm text-gray-600">University of Engineering and Technology</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/"
                  className={`font-medium hover:text-blue-800 transition ${isActive('/') ? 'text-blue-700' : 'text-gray-700'}`}
                >
                  Home
                </Link>
              </li>
              <li className="relative">
                <button 
                  onClick={() => toggleDropdown('about')}
                  className="flex items-center text-gray-700 font-medium hover:text-blue-700 transition"
                >
                  About <FiChevronDown className="ml-1" />
                </button>
                {activeDropdown === 'about' && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <Link to="/about" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/about') ? 'text-blue-700 font-semibold' : 'text-gray-700'}`}>History</Link>
                <Link to="/about#vision" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/about#vision') ? 'text-blue-700 font-semibold' : 'text-gray-700'}`}>Vision & Mission</Link>
                <Link to="/about#administration" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/about#administration') ? 'text-blue-700 font-semibold' : 'text-gray-700'}`}>Administration</Link>
                  </div>
                )}
              </li>
              <li className="relative">
                <button 
                  onClick={() => toggleDropdown('academics')}
                  className="flex items-center text-gray-700 font-medium hover:text-blue-700 transition"
                >
                  Academics <FiChevronDown className="ml-1" />
                </button>
                {activeDropdown === 'academics' && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <Link to="/departments" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/departments') ? 'text-blue-700 font-semibold' : 'text-gray-700'}`}>Departments</Link>
                <Link to="/academics#programs" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/academics#programs') ? 'text-blue-700 font-semibold' : 'text-gray-700'}`}>Programs</Link>
                <Link to="/academics#calendar" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/academics#calendar') ? 'text-blue-700 font-semibold' : 'text-gray-700'}`}>Academic Calendar</Link>
                  </div>
                )}
              </li>
              <li>
                <Link to="/admissions" className={`font-medium hover:text-blue-700 transition ${isActive('/admissions') ? 'text-blue-700' : 'text-gray-700'}`}>Admissions</Link>
              </li>
              <li>
                <Link to="/research" className={`font-medium hover:text-blue-700 transition ${isActive('/research') ? 'text-blue-700' : 'text-gray-700'}`}>Research</Link>
              </li>
              <li>
                <Link to="/contact" className={`font-medium hover:text-blue-700 transition ${isActive('/contact') ? 'text-blue-700' : 'text-gray-700'}`}>Contact</Link>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="space-y-2 pb-4">
              <li><Link to="/" className={`block py-2 font-medium ${isActive('/') ? 'text-blue-700' : 'text-gray-700'}`}>Home</Link></li>
              <li>
                <button 
                  onClick={() => toggleDropdown('about-mobile')}
                  className="flex items-center justify-between w-full py-2 text-gray-700 font-medium"
                >
                  About <FiChevronDown className={`transition ${activeDropdown === 'about-mobile' ? 'transform rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'about-mobile' && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link to="/about" className={`block py-1 ${isActive('/about') ? 'text-blue-700 font-semibold' : 'text-gray-600'}`}>History</Link>
                    <Link to="/about#vision" className={`block py-1 ${isActive('/about#vision') ? 'text-blue-700 font-semibold' : 'text-gray-600'}`}>Vision & Mission</Link>
                    <Link to="/about#administration" className={`block py-1 ${isActive('/about#administration') ? 'text-blue-700 font-semibold' : 'text-gray-600'}`}>Administration</Link>
                  </div>
                )}
              </li>
              <li>
                <button 
                  onClick={() => toggleDropdown('academics-mobile')}
                  className="flex items-center justify-between w-full py-2 text-gray-700 font-medium"
                >
                  Academics <FiChevronDown className={`transition ${activeDropdown === 'academics-mobile' ? 'transform rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'academics-mobile' && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link to="/departments" className={`block py-1 ${isActive('/departments') ? 'text-blue-700 font-semibold' : 'text-gray-600'}`}>Departments</Link>
                    <Link to="/academics#programs" className={`block py-1 ${isActive('/academics#programs') ? 'text-blue-700 font-semibold' : 'text-gray-600'}`}>Programs</Link>
                    <Link to="/academics#calendar" className={`block py-1 ${isActive('/academics#calendar') ? 'text-blue-700 font-semibold' : 'text-gray-600'}`}>Academic Calendar</Link>
                  </div>
                )}
              </li>
              <li><Link to="/admissions" className={`block py-2 font-medium ${isActive('/admissions') ? 'text-blue-700' : 'text-gray-700'}`}>Admissions</Link></li>
              <li><Link to="/research" className={`block py-2 font-medium ${isActive('/research') ? 'text-blue-700' : 'text-gray-700'}`}>Research</Link></li>
              <li><Link to="/contact" className={`block py-2 font-medium ${isActive('/contact') ? 'text-blue-700' : 'text-gray-700'}`}>Contact</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;