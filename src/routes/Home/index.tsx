import React from "react";
import { Header } from "../../components/Header";

export const Home = () => {
  return (
    <div className="flex flex-1 min-h-screen bg-homeMobileBG bg-cover md:bg-homeTabBG lg:bg-homeDesktopBG">
      <div className="flex flex-1 mt-10 ml-14 h-fit ">
        <Header />
      </div>
    </div>
  );
};
