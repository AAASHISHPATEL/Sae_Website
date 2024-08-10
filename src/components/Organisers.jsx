import React from 'react';
import './Organisers.css';

const Organisers = () => {
  const organisers = [
    { name: 'Divas Gupta', imgSrc: 'https://live.staticflickr.com/65535/52768144132_3837c5e117_n.jpg' },
    { name: 'Anurag Singh', imgSrc: 'https://live.staticflickr.com/65535/52768683256_ed303a5a9b_n.jpg' },
    { name: 'Anik Mondal', imgSrc: 'https://live.staticflickr.com/65535/52769097740_6d6dbc38b3_n.jpg' },
    { name: 'Vishal Jaiswal', imgSrc: 'https://live.staticflickr.com/65535/52768939169_18b4bdcee3_n.jpg' },
    { name: 'Souryadip Mondal', imgSrc: 'https://live.staticflickr.com/65535/52768144432_3696ae1eee_n.jpg' },
    { name: 'Sukanya Dutta', imgSrc: 'https://live.staticflickr.com/65535/52769172673_0ee71b3b8e_n.jpg' },
    
  ];

  return (
    <div className="organisers-container mx-auto">
      {organisers.map((organiser, index) => (
        <div key={index} className="image-card font-bold text-xl" data-name={organiser.name}>
          <img src={organiser.imgSrc} alt={organiser.name} />
        </div>
      ))}
    </div>
  );
};

export default Organisers;
