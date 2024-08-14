import React, { useEffect, useState } from 'react';
import HeaderImg from './components/HeaderImg';
import Speakers from './components/Speakers';
import Organisers from './components/Organisers';
import ImageCarousel from './components/ImageCarousel';
import Navbar from './components/Navbar';  // Import the Navbar component
import './App.css';

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.slide-in-left, .slide-in-right');
      const windowHeight = window.innerHeight;

      elements.forEach(element => {
        const positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />  {/* Add the Navbar component */}

      <HeaderImg />

      {/* About TedX Section */}
      <div className="info flex flex-col md:flex-row justify-around m-8 md:m-16 slide-in-left">
        <div className="flex flex-col w-full md:w-1/2 p-4 order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold text-custom-red text-center mb-6 font-sans">About TedX</h1>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-8">
          TEDx is the independently organized counterpart to the global TED conference. Sharing TED's commitment to spreading "ideas worth spreading," TEDx provides a credible platform for emerging talent at the local level, encouraging thoughtful discussions within communities. These events are driven by passionate individuals who seek to discover new ideas and inspire conversations in their own areas.
          </p>
        </div>
        <div className="flex justify-center w-full md:w-auto order-1 md:order-2">
          <img
            src="https://live.staticflickr.com/65535/52768165852_a5dc725ce9.jpg"
            alt="Teddy Bear"
            className="w-40 h-40 md:w-80 md:h-80 object-cover rounded-full shadow-md"
          />
        </div>
      </div>

      {/* SAE in TedX Section */}
      <div className="info flex flex-col md:flex-row justify-around m-8 md:m-16 slide-in-right">
        <div className="flex justify-center w-full md:w-auto order-1 md:order-1">
          <img
            src="https://live.staticflickr.com/65535/52768700101_42d558203a_c.jpg"
            alt=""
            className="w-40 h-40 md:w-80 md:h-80 object-cover rounded-full shadow-md"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 p-4 order-2 md:order-2">
          <h1 className="text-4xl md:text-5xl font-bold text-custom-red text-center mb-6">SAE in TedX</h1>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-8">
          SAE, in collaboration with the Literary Circle, organizes TEDxNITDurgapur, as part of the global TED initiative. This worldwide grassroots effort seeks to create a platform that brings together diverse voices from various fields to share and promote innovative ideas and perspectives.
          </p>
        </div>
      </div>

      <div className="max-w-screen mx-auto p-4">
        <ImageCarousel />
      </div>

      <div className="max-w-screen mx-auto p-4">
        <h1 className="text-5xl font-bold text-custom-red text-center">Speakers</h1>
        <Speakers />
      </div>

      <div className="max-w-screen mx-auto p-4">
        <h1 className="text-5xl font-bold text-custom-red text-center mb-6">Organisers</h1>
        <Organisers />
      </div>
    </div>
  );
};

export default App;
