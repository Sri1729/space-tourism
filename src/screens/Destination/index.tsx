import React from "react";
import { Header } from "../../common";
import { HeaderRoute } from "../../types";
import { DestinationComp } from "../../components";

function Destination() {
  return (
    <div className="flex flex-1 min-h-full flex-col bg-fixed bg-destinationMobileBG bg-cover md:bg-destinationTabBG lg:bg-destinationDesktopBG">
      <div>
        <Header from={HeaderRoute.Destination} />
      </div>
      <div className="flex flex-1 m-6 bg-transparent">
        <DestinationComp />
      </div>
    </div>
  );
}

export default Destination;
