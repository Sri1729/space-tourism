import React from "react";
import { Logo } from "../../assets";

const menu = [
  { id: "00", name: "Home" },
  { id: "01", name: "Destination" },
  { id: "02", name: "Crew" },
  { id: "03", name: "Technology" },
];

export const Header = () => {
  return (
    <div className="flex flex-1 flex-row items-center justify-items-end">
      {/* Logo with BG */}
      <div className="bg-white h-fit w-fit rounded-full">
        <img src={Logo} alt="logo" className="h-10 w-10" />
      </div>

      {/* Divider */}
      <div className="flex flex-1 h-px opacity-25 bg-white mx-10 relative left-16 z-10" />

      {/* Menu */}
      <div className="flex flex-1 flex-row w-fit align-middle items-center justify-center bg-headerMenuBgColor backdrop-blur-lg">
        {menu.map((item) => (
          <button className="my-2 mx-4">
            <span className="text-white">{`${item.id} ${item.name}`}</span>
            <div className="mt-2 h-0.5 bg-white" />
          </button>
        ))}
      </div>
    </div>
  );
};
