import React from 'react';
import './Speakers.css'; 

const speakers = [
  {
    name: 'SomeOne Famous',
    role: 'Director',
    imgSrc: 'https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'SomeOne Famous',
    role: 'Producer',
    imgSrc: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'SomeOne Famous',
    role: 'Actor',
    imgSrc: 'https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'SomeOne Famous',
    role: 'Director',
    imgSrc: 'https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'SomeOne Famous',
    role: 'Producer',
    imgSrc: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'SomeOne Famous',
    role: 'Actor',
    imgSrc: 'https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'SomeOne Famous',
    role: 'Director',
    imgSrc: 'https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'SomeOne Famous',
    role: 'Producer',
    imgSrc: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'SomeOne Famous',
    role: 'Actor',
    imgSrc: 'https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
];

const Speakers = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-6 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {speakers.map((speaker, index) => (
          <div key={index} className="card relative w-80 h-80 bg-white rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:rotate-3 hover:shadow-xl">
            <div className="imgBx absolute inset-2 bg-gray-900">
              <img src={speaker.imgSrc} alt={speaker.name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-2 left-2 right-2 text-center details">
              <h2 className="text-white text-2xl font-bold uppercase">{speaker.name}<br /><span className="text-custom-red text-xl font-semibold">{speaker.role}</span></h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;