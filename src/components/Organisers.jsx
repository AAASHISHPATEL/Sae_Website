import React from 'react';
import './Organisers.css'; // Include your custom styles

const Hcard = ({ imgSrc, name }) => {
    return (
        <figure className="relative inline-block overflow-hidden m-4 min-w-[300px] max-w-[400px] w-full h-card">
            <img src={imgSrc} alt="Hcard image" className="w-full h-64 object-cover rounded-xl cursor-pointer" />
            <figcaption className="absolute bottom-0 left-0 w-full p-2">
                <h3 className="text-3xl text-white font-bold text-center">{name}</h3>
            </figcaption>
        </figure>
    );
};

const Organisers = () => {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            <Hcard
                imgSrc="https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=600"
                name="John Doe"
            />
            <Hcard
                imgSrc="https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=600"
                name="Jane Smith"
            />
            <Hcard
                imgSrc="https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=600"
                name="Emily Johnson"
            />
            <Hcard
                imgSrc="https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=600"
                name="Michael Brown"
            />
            <Hcard
                imgSrc="https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=600"
                name="Sarah Davis"
            />
            <Hcard
                imgSrc="https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=600"
                name="David Wilson"
            />
        </div>
    );
};

export default Organisers;
