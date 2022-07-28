import React, { useState } from "react";
import {
  opacityVariant,
  scalingOpacityVariant,
  technology,
} from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

export const TechonologyComp = () => {
  const [tech, setTech] = useState(technology[0]);
  return (
    <div className="flex flex-1 flex-col items-center lg:ml-28">
      {/* Title */}
      <div className="flex justify-center md:self-start">
        <p className="h-fit text-white tracking-widest ml-6 text-base md:text-xl lg:text-3xl">
          <span className="opacity-25 font-bold">03</span>
          <span className="ml-3 font-normal uppercase">Space Launch 101</span>
        </p>
      </div>

      <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-between lg:items-start lg:mt-10">
        {/* Image */}
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={`img-${tech.name}`}
            variants={scalingOpacityVariant}
            initial="initial"
            animate="visible"
            exit="exit"
            className="flex w-full my-8 lg:my-0 lg:w-fit lg:justify-end lg:self-start"
          >
            <img
              src={tech.images.landscape}
              alt={tech.name}
              className="w-full h-fit lg:hidden"
            />
            <img
              src={tech.images.portrait}
              alt={tech.name}
              className="hidden w-11/12 h-full lg:flex"
            />
          </motion.div>
        </AnimatePresence>
        <div className="flex flex-1 flex-col items-center lg:flex-row lg:items-start lg:self-center">
          {/* Nav */}
          <div className="flex flex-1 mb-7 lg:flex-col lg:flex-none">
            {technology.map((item, index) => (
              <button
                onClick={() => setTech(item)}
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 border-opacity-50 border-white ${
                  item === tech ? "text-black bg-white" : "text-white bg-black"
                } hover:border-opacity-100 mx-2 text-base font-heading md:w-16 md:h-16 md:mx-4 md:text-2xl lg:w-20 lg:h-20 lg:text-4xl lg:my-4`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Body */}
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={`info-${tech.name}`}
              variants={opacityVariant}
              initial="initial"
              animate="visible"
              exit="exit"
              className="flex flex-1 flex-col text-center text-white md:w-3/4 lg:my-6 lg:text-start lg:mx-20 lg:w-full"
            >
              <span className="uppercase text-sm tracking-widest leading-5 font-normal md:text-base">
                The terminology...
              </span>
              <span className="uppercase text-2xl mt-4 mb-4 font-heading tracking-wider md:text-4xl lg:text-6xl">
                {tech.name}
              </span>
              <span className="text-base text-textSecondary mx-5 leading-8 tracking-wide lg:mx-0 lg:text-lg">
                {tech.description}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
