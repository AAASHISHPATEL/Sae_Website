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
    <div className="speakers-container">
      <div className="organisers-container">
        {speakers.map((speaker, index) => (
          <div key={index} className="card">
            <div className="imgBx">
              <img src={speaker.imgSrc} alt={speaker.name} />
            </div>
            <div className="details">
              <h2>{speaker.name}<br /><span>{speaker.role}</span></h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;