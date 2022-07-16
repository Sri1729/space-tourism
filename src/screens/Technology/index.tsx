import React from "react";
import { Header } from "../../components/Header";
import { HeaderRoute } from "../../types";

function Technology() {
  return (
    <div className="flex flex-1 min-h-screen bg-technologyMobileBG bg-cover md:bg-technologyTabBG lg:bg-technologyDesktopBG">
      <Header from={HeaderRoute.Technology} />
    </div>
  );
}

export default Technology;
