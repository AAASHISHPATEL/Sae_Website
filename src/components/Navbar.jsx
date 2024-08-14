import { useState, useEffect } from 'react';
import './Navbar.css'; // Ensure to import the CSS file

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Menu starts as closed
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Ensure the menu stays closed on initial load
  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full p-4 transition-colors duration-300 ease-in-out ${isOpen ? 'bg-black' : isScrolled ? 'bg-[#161616cc]' : 'bg-black'} text-white z-50`}>
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src="https://swarajjaiswal.github.io/saeevents/logo.png" alt="Logo" className="h-12" />
        </a>

        <div className="hidden md:flex space-x-8">
          <a href="/" className="nav-link text-lg font-bold hover:text-custom-red">HOME</a>
          <a href="/" className="nav-link text-lg font-bold hover:text-custom-red">EVENTS</a>
          <a href="/" className="nav-link text-lg font-bold hover:text-custom-red">TEAMS</a>
          <a href="/" className="nav-link text-lg font-bold hover:text-custom-red">TEDX</a>
          <a href="/" className="nav-link text-lg font-bold hover:text-custom-red">AAROHAN</a>
        </div>

        <button className="md:hidden relative z-20" onClick={toggleNavbar}>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 transition-transform duration-300 ease-in-out transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 transition-transform duration-300 ease-in-out transform rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <div
          className={`md:hidden fixed top-16 left-0 w-full p-4 rounded-b-md shadow-md z-10 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0 opacity-100 bg-black' : '-translate-y-full opacity-0'}`}
        >
          <div className="flex flex-col space-y-4 ml-12 m-8">
            <a href="/" className="block text-white hover:text-custom-red text-lg font-bold transition duration-300 ease-in-out">HOME</a>
            <a href="/" className="block text-white hover:text-custom-red text-lg font-bold transition duration-300 ease-in-out">EVENTS</a>
            <a href="/" className="block text-white hover:text-custom-red text-lg font-bold transition duration-300 ease-in-out">TEAMS</a>
            <a href="/" className="block text-white hover:text-custom-red text-lg font-bold transition duration-300 ease-in-out">TEDX</a>
            <a href="/" className="block text-white hover:text-custom-red text-lg font-bold transition duration-300 ease-in-out">AAROHAN</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
