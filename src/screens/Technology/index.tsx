import React from "react";
import { Header } from "../../components";
import { HeaderRoute } from "../../types";

function Technology() {
  return (
    <div className="flex flex-1 h-full bg-technologyMobileBG bg-cover md:bg-technologyTabBG lg:bg-technologyDesktopBG">
      <Header from={HeaderRoute.Technology} />
    </div>
  );
}

export default Technology;
