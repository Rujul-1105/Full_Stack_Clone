import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className="min-h-screen w-full flex flex-col text-white overflow-hidden" style={{backgroundImage: "url('https://img.freepik.com/premium-photo/with-awake-city-colorful-signal-light-silver-color-stand_1109554-1545.jpg')", backgroundSize: "cover", backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>

{/* bg-black bg-opacity-60 bg-[url('')] bg-cover bg-center bg-blend-overlay */}

      <div className="text-4xl md:text-6xl font-bold p-8 md:p-8 tracking-tight">
        Uber
      </div>
      <div className="flex-1 flex flex-col justify-center px-8 max-w-2xl ">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 tracking-tight">
          Get Started with Uber
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
          Your journey begins here. Experience seamless rides across the city.
        </p>
        
        <Link to="/user-signup" className="inline-block px-8 py-3.5 bg-white text-black text-lg font-medium rounded-lg transition-all duration-200 hover:bg-gray-100 hover:-translate-y-0.5 w-fit">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Start;
