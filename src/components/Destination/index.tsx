import React, { useState } from "react";

import { destinations } from "../../constants";

export const DestinationComp = () => {
  const [destination, setDestination] = useState(destinations[0]);

  return (
    <div className="flex flex-1 flex-col lg:flex-row lg:justify-around">
      {/* Title */}
      <div className="flex justify-center md:self-start lg:flex-col lg:w-fit">
        <p className="h-fit text-white text-base md:text-xl lg:text-3xl">
          <span className="opacity-25 font-bold">01</span>
          <span className="ml-3 font-normal uppercase">
            Pick your destination
          </span>
        </p>
        <img
          src={destination.images.webp}
          alt="moon"
          className="hidden w-96 h-96 my-8 lg:flex"
        />
      </div>

      <div className="flex flex-1 flex-col items-center md:w-3/4 md:self-center lg:items-start lg:justify-start lg:flex-none lg:w-1/2">
        {/* Image */}

        <img
          src={destination.images.webp}
          alt="moon"
          className="w-44 h-44 my-8 md:w-72 md:h-72 lg:hidden"
        />

        {/* Selection */}
        <div>
          {destinations.map((item) => (
            <button
              onClick={() => setDestination(item)}
              className={`text-textSecondary text-sm p-2 ml-6 border-b-2 border-white ${
                item === destination ? "border-opacity-100" : "border-opacity-0"
              } hover:border-opacity-50 md:text-base`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="flex flex-col items-center text-center text-white lg:items-start lg:text-start">
          <p className="text-6xl uppercase my-5 md:text-7xl lg:text-9xl">
            {destination.name}
          </p>
          <p className="text-base text-textSecondary">
            {destination.description}
          </p>
        </div>

        {/* Divider */}
        <div className="flex my-8 w-full border-['#383B4B'] border-b-2" />

        {/* Info */}
        <div className="flex flex-1 w-full flex-col text-textSecondary text-sm uppercase text-center md:flex-row md:justify-evenly lg:justify-start">
          <div className="lg:text-start">
            <p>Avg. Distance</p>
            <p className="text-white text-3xl mt-3 mb-5">
              {destination.distance}
            </p>
          </div>
          <div className="lg:text-start lg:ml-20">
            <p>Est. travel time</p>
            <p className="text-white text-3xl mt-3">{destination.travel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
