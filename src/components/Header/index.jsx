import React from "react";

const Header = ({ title, image, type }) => {
  return (
    <div className="w-full h-[50vh] bg-cyan-600">
      <div className="relative w-full h-full">
        {image &&
          <img src={image} alt='Hero Image' className='w-full h-full object-cover'/>}
      </div>

      <div className="absolute w-full h-1/2 bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
          {title}
        </h1>
        {type && (
          <p className="text-sm mt-4 text-center text-cyan-600 bg-black/50 px-6 py-4 rounded-full">
            Welcome to your food/sports/news dashboard
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
