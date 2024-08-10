import React from 'react';
import HeaderImg from './components/HeaderImg';
import Speakers from './components/Speakers';
import Organisers from './components/Organisers';
import ImageCarousel from './components/ImageCarousel';
import './App.css'

const App = () => {
  return (
    <div className=" overflow-x-hidden">
      <HeaderImg />

      {/* About TedX Section */}
      <div className="info flex flex-col md:flex-row justify-around m-8 md:m-16">
        <div className="flex flex-col w-full md:w-1/2 p-4 order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold text-custom-red text-center mb-6 font-sans">About TedX</h1>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-8">
            TEDx is an independently organized equivalent to its international counterpart, TED. Resonating with TED’s mission of researching and discovering “ideas worth spreading”, TEDx aims to provide a credible platform to an emerging pool of talent at the grassroots, subsequently sparking constructive discussions locally. TEDx events are organized by curious individuals who seek to discover ideas and spark conversations in their own community.
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
      <div className="info flex flex-col md:flex-row justify-around m-8 md:m-16">
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
            SAE also conducts TEDxNITDurgapur, a part of TED along with Literary Circle, a worldwide, grassroots initiative, that aims to provide a platform for a symphony of voices from a plethora of spheres to propagate ingenious ideas and thoughts.
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
