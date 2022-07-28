import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

import {
  destinations,
  opacityVariant,
  scalingOpacityVariant,
} from "../../constants";

export const DestinationComp = () => {
  const [destination, setDestination] = useState(destinations[0]);

  return (
    <div className="flex flex-1 flex-col">
      {/* Title */}
      <div className="flex justify-center md:self-start lg:mx-28">
        <p className="h-fit text-white tracking-widest text-base md:text-xl lg:text-3xl">
          <span className="opacity-25 font-bold">01</span>
          <span className="ml-3 font-normal uppercase">
            Pick your destination
          </span>
        </p>
      </div>

      <div className="flex flex-1 flex-col items-center md:w-3/4 md:self-center lg:flex-row">
        {/* Image */}

        <div className="flex flex-1">
          <AnimatePresence exitBeforeEnter>
            <motion.img
              key={`img-${destination.name}`}
              variants={scalingOpacityVariant}
              initial="initial"
              animate="visible"
              exit="exit"
              src={destination.images.webp}
              alt="moon"
              className="w-44 h-44 my-8 md:w-72 md:h-72 lg:w-96 lg:h-96"
            />
          </AnimatePresence>
        </div>

        <div className="flex flex-1 flex-col items-center lg:items-start">
          {/* Selection */}
          <div>
            {destinations.map((item) => (
              <button
                onClick={() => setDestination(item)}
                className={`text-textSecondary text-sm tracking-widest p-2 ml-3 border-b-2 border-white ${
                  item === destination
                    ? "border-opacity-100"
                    : "border-opacity-0"
                } hover:border-opacity-50 md:ml-6 md:text-base lg:ml-0 lg:mr-6`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Body */}
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={`body-${destination.name}`}
              variants={opacityVariant}
              initial="initial"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center text-center text-white lg:items-start lg:text-start"
            >
              <div>
                <p className="text-6xl uppercase my-5 font-heading md:text-7xl lg:text-9xl">
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
                  <p className="tracking-widest">Avg. Distance</p>
                  <p className="text-white text-3xl mt-3 mb-5 font-heading">
                    {destination.distance}
                  </p>
                </div>
                <div className="lg:text-start lg:ml-20">
                  <p className="tracking-widest">Est. travel time</p>
                  <p className="text-white text-3xl mt-3 font-heading">
                    {destination.travel}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
