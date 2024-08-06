import React from 'react';

const images = [
  {
    id: 1,
    url: 'https://live.staticflickr.com/65535/52769190048_b589abcc80_c.jpg',
  },
  {
    id: 2,
    url: 'https://live.staticflickr.com/65535/52770039962_72bc8e3de0_z.jpg',
  },
  {
    id: 3,
    url: 'https://live.staticflickr.com/65535/52771023680_9c71d6edfa.jpg',
  },
  {
    id: 4,
    url: 'https://live.staticflickr.com/65535/52768957679_875b7065c1_c.jpg',
  },
  {
    id: 5,
    url: 'https://live.staticflickr.com/65535/52770988935_63073728a2_z.jpg',
  },
  {
    id: 6,
    url: 'https://live.staticflickr.com/65535/52780953624_a6fafa6621_w.jpg',
  },
  {
    id: 7,
    url: 'https://live.staticflickr.com/65535/52768700661_5d6d983237_c.jpg',
  },
  {
    id: 8,
    url: 'https://live.staticflickr.com/65535/52770053252_c8911f0b4e_z.jpg',
  },
  {
    id: 9,
    url: 'https://live.staticflickr.com/65535/52780703426_e3eaa82d0e_w.jpg',
  },

  // Add more items as needed
];

const ImageCarousel = () => {
  return (
    <section className="py-8 sm:py-16">
      <h1 className="text-5xl text-custom-red font-sans font-bold text-center mb-12">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((item, index) => (
          <div
            key={item.id}
            className={`relative flex flex-col justify-end overflow-hidden bg-cover bg-center shadow-lg transform transition-transform duration-300 cursor-pointer hover:scale-105 ${
              (index + 1) % 3 === 0 ? 'row-span-2 lg:row-span-1' : ''
            } ${(index + 1) % 4 === 0 ? 'lg:col-span-2' : ''} ${
              (index + 1) % 5 === 0 ? 'lg:h-auto' : 'h-60 lg:h-80'
            }`}
            style={{ backgroundImage: `url(${item.url})` }}
          >
            <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300 hover:opacity-0"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageCarousel;
