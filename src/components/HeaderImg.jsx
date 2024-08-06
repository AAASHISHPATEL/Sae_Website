import React, { useState, useEffect } from 'react';
import './HeaderImg.css';

const images = [
  'https://www.pittstate.edu/news/2019/images/tedx-logo-1680x680.jpg',
  'https://tedxsydney.com/wp-content/uploads/2017/12/tedx-sydney-events-in-sydney-andy-dexterity.jpg',
  'https://www.whiteclouds.com/wp-content/uploads/2021/10/tedx-030-letters3-600w-1.jpeg',
  'https://cdn.vanderbilt.edu/vu-news/files/20230520085108/Save-The-Date-TV-Ad-1.png'
];

const clipPaths = [
  'translate-x-[16%] scale-[10]',
  'translate-x-[-30%] scale-[15]',
  'translate-x-[260%] scale-[16]',
  'translate-x-[-660%] translate-y-[-250%] scale-[25]'
];

const HeaderImg = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const schedule = () => {
      progress();
      setTimeout(schedule, 4000); // 4 seconds delay between transitions
    };
    const timeoutId = setTimeout(schedule, 500); // Initial delay before the first transition

    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, []);

  const progress = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % images.length);
  };

  return (
    <div className="relative1 w-full h-screen overflow-hidden bg-black">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Stock ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1000ms] ${index === current ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      {clipPaths.map((clipPath, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-[1200ms] delay-[500ms] ${index === current ? clipPath : ''}`}
        />
      ))}
    </div>
  );
};

export default HeaderImg;
