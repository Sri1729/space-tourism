import React from "react";
import { Header } from "../../common";
import { CrewComp } from "../../components";
import { HeaderRoute } from "../../types";

function Crew() {
  return (
    <div className="flex flex-1 min-h-full w-full flex-col bg-fixed  bg-crewMobileBG bg-cover md:bg-crewTabBG lg:bg-crewDesktopBG">
      <div className="flex h-fit">
        <Header from={HeaderRoute.Crew} />
      </div>
      <div className="flex flex-1 m-6 bg-transparent md:mb-0 overflow-hidden">
        <CrewComp />
      </div>
    </div>
  );
}

export default Crew;
