import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <img
              src="/assets/logo/Nayi-Soch-Humari-Kalpna.png"
              alt="Nayi Soch Humari Kalpna Logo"
              className="w-10 h-10 object-contain"
            />
          </div>

          <div className="hidden md:block">
            <h1 className="font-bold text-lg leading-tight">Nayi Soch Humari Kalpna</h1>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
              Mahila Mandal
            </p>
          </div>
        </Link>


        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold tracking-wide hover:text-brandPurple transition-colors ${
                location.pathname === link.path ? 'text-brandPurple' : 'text-black'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            className="px-6 py-2.5 bg-brandPurple text-white font-bold text-sm rounded-full flex items-center gap-2 hover:bg-black transition-all duration-300 brand-shadow"
          >
            <Heart size={16} fill="currentColor" />
            Support the Mission
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold hover:text-brandPurple"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="px-8 py-3 bg-brandPurple text-white font-bold rounded-full brand-shadow"
          >
            Support the Mission
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;