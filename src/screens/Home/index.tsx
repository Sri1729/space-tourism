import React from "react";
import { Header, HomeComp } from "../../components";
import { HeaderRoute } from "../../types";

export const Home = () => {
  return (
    <div className="flex flex-1 flex-col min-h-screen bg-homeMobileBG bg-cover md:bg-homeTabBG lg:bg-homeDesktopBG">
      <div>
        <Header from={HeaderRoute.Home} />
      </div>
      <div className="flex flex-1 h-full my-12 mx-6">
        <HomeComp />
      </div>
    </div>
  );
};
