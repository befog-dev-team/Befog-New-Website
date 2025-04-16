
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import logo from '@/assets/logo.svg'; 

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Set active link based on current path
    const path = window.location.pathname;
    setActiveLink(path);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/services', label: 'Services', animation: 'nav-link' },
    { path: '/about', label: 'About', animation: 'nav-link-flash' },
    { path: '/work', label: 'Our Work', animation: 'nav-link-scale' },
    { path: '/testimonials', label: 'Testimonials', animation: 'nav-link-glow' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-primary-950/90 backdrop-blur-md py-3 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group cursor-pointer">
          <span className="text-xl font-bold text-primary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"><img src={logo} alt="logo" /></span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={`${link.animation} ${activeLink === link.path ? 'text-primary-600 dark:text-primary-400' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          
          <ThemeToggle />
          
          <Link to="/contact">
            <Button className="bg-primary-600 hover:bg-primary-700 text-white overflow-hidden group relative">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-primary-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button 
            className="text-gray-700 dark:text-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-primary-950 shadow-lg absolute top-full left-0 right-0 py-4 animate-fade-in">
          <nav className="container flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`font-medium text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400 transition-colors py-2 ${activeLink === link.path ? 'text-primary-600 dark:text-primary-400' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="bg-primary-600 hover:bg-primary-700 text-white w-full">
                Contact Us
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
