import React from "react";
import { useNavigate } from "react-router-dom";

export const HomeComp = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 flex-col h-auto justify-between items-center md:justify-around lg:flex-row lg:items-center lg:h-fit lg:self-center lg:relative lg:top-12 lg:mx-40">
      <div className="flex flex-1 flex-col items-center">
        <div className="w-full text-center text-white md:w-2/3 lg:text-start">
          <p className="text-base text-textSecondary tracking-widest leading-9 md:text-xl lg:text-3xl">
            So, you want to travel to
          </p>

          <p className="text-7xl mt-4 mb-5 font-heading md:text-8xl lg:text-9xl lg:mb-7 lg:leading-[172px]">
            Space
          </p>

          <p className="text-base text-textSecondary lg:text-lg lg:leading-8">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <button
          onClick={() => {
            navigate("/destination");
          }}
          className="flex w-40 h-40 rounded-full text-xl font-normal bg-white items-center justify-center uppercase tracking-widest font-heading md:h-56 md:w-56 md:text-3xl lg:h-64 lg:w-64 transition-all duration-300 ease-in hover:shadow-[0_0_0_88px_rgba(255,255,255,0.1)]"
        >
          Explore
        </button>
      </div>
    </div>
  );
};
