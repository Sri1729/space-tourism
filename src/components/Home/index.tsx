import React from "react";

export const HomeComp = () => {
  return (
    <div className="flex flex-1 flex-col h-auto justify-between items-center md:justify-around lg:flex-row lg:items-end lg:h-fit lg:self-center lg:relative lg:top-12">
      <div className="w-full text-center text-white md:w-2/3 lg:w-1/3 lg:text-start">
        <p className="text-base text-textSecondary md:text-xl lg:text-3xl">
          So, you want to travel to
        </p>

        <p className="text-7xl mt-4 mb-5 md:text-8xl lg:text-9xl lg:mb-7">
          Space
        </p>

        <p className="text-base text-textSecondary lg:text-lg">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <button className="flex w-40 h-40 rounded-full text-xl font-normal bg-white items-center justify-center md:h-56 md:w-56 md:text-3xl lg:h-64 lg:w-64 hover:drop-shadow-exploreBtn">
        Explore
      </button>
    </div>
  );
};
