import React from "react";
import { Header } from "../../components/Header";
import { HeaderRoute } from "../../types";

function Destination() {
  return (
    <div className="flex flex-1 min-h-screen bg-destinationMobileBG bg-cover md:bg-destinationTabBG lg:bg-destinationDesktopBG">
      <Header from={HeaderRoute.Destination} />
    </div>
  );
}

export default Destination;
