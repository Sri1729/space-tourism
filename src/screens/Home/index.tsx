import React from "react";
import { Header } from "../../components/Header";
import { HeaderRoute } from "../../types";

export const Home = () => {
  return (
    <div className="flex flex-1 min-h-screen bg-homeMobileBG bg-cover md:bg-homeTabBG lg:bg-homeDesktopBG">
      <Header from={HeaderRoute.Home} />
    </div>
  );
};
