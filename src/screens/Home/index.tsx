import React from "react";
import { Header } from "../../common";
import { HeaderRoute } from "../../types";
import { HomeComp } from "../../components";

export const Home = () => {
  return (
    <div className="flex flex-1 flex-col h-full w-full bg-homeMobileBG bg-cover md:bg-homeTabBG lg:bg-homeDesktopBG">
      <div>
        <Header from={HeaderRoute.Home} />
      </div>
      <div className="flex flex-1 h-full my-12 mx-6">
        <HomeComp />
      </div>
    </div>
  );
};
