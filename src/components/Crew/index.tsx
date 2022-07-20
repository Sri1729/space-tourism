import React, { useState } from "react";
import { crew } from "../../constants";

export const CrewComp = () => {
  const [crewMem, setCrewMem] = useState(crew[0]);
  return (
    <div className="flex flex-1 flex-col items-center lg:mx-36">
      {/* Heading */}
      <div className="flex md:self-start">
        <p className="h-fit text-white text-base md:text-xl lg:text-3xl">
          <span className="opacity-25 font-bold">02</span>
          <span className="ml-3 font-normal uppercase">Meet Your Crew</span>
        </p>
      </div>
      {/* Body */}
      <div className="flex flex-1 flex-col w-full items-center my-8 md:flex-col-reverse md:w-3/4 md:mb-0 lg:w-full lg:flex-row-reverse">
        {/* Image */}
        <div className="flex flex-1 w-full justify-center items-end border-b-2 border-divider md:border-b-0">
          <img
            src={crewMem.images.webp}
            alt={`${crewMem.name}`}
            className="w-fit h-56 md:h-[450px]"
          />
        </div>

        <div className="flex flex-1 flex-col items-center md:flex-col-reverse lg:items-start lg:h-full lg:py-10">
          {/* Dot Nav */}
          <div className="flex my-8">
            {crew.map((item) => (
              <div>
                <button
                  onClick={() => setCrewMem(item)}
                  className={`w-3 h-3 mx-4 rounded-full bg-white ${
                    item === crewMem ? "opacity-100" : "opacity-20"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="flex flex-1 flex-col items-center text-center text-white lg:items-start lg:w-3/4 lg:text-start">
            <span className="opacity-50 text-base md:text-2xl lg:text-3xl">
              {crewMem.role}
            </span>
            <span className="text-2xl mt-2 md:text-4xl lg:text-6xl">
              {crewMem.name}
            </span>
            <span className="text-textSecondary text-base mt-4 lg:text-lg">
              {crewMem.bio}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
