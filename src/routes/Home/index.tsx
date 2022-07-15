import React from "react";
import { Header } from "../../components/Header";

export const Home = () => {
  return (
    <div className="flex flex-1 min-h-screen bg-homeMobileBG bg-cover md:bg-homeTabBG lg:bg-homeDesktopBG">
      <div className="flex flex-1 m-6 h-fit md:m-0 md:ml-10 lg:mt-10 lg:ml-14">
        <Header />
      </div>
    </div>
  );
};
