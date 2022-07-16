import React from "react";
import { Header } from "../../components/Header";
import { HeaderRoute } from "../../types";

function Crew() {
  return (
    <div className="flex flex-1 min-h-screen bg-crewMobileBG bg-cover md:bg-crewTabBG lg:bg-crewDesktopBG">
      <Header from={HeaderRoute.Crew} />
    </div>
  );
}

export default Crew;
