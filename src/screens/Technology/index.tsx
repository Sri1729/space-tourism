import React from "react";
import { Header } from "../../common";
import { TechonologyComp } from "../../components";
import { HeaderRoute } from "../../types";

function Technology() {
  return (
    <div className="flex flex-1 flex-col min-h-full bg-fixed bg-technologyMobileBG bg-cover md:bg-technologyTabBG lg:bg-technologyDesktopBG">
      <div>
        <Header from={HeaderRoute.Technology} />
      </div>
      <div className="flex flex-1 mt-6 bg-transparent">
        <TechonologyComp />
      </div>
    </div>
  );
}

export default Technology;
