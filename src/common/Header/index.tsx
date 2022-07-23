import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo, HamburgerIcon, CloseIcon } from "../../assets";
import { HeaderRoute } from "../../types";

const menu = [
  { id: "00", name: "Home", route: "/" },
  { id: "01", name: "Destination", route: "/destination" },
  { id: "02", name: "Crew", route: "/crew" },
  { id: "03", name: "Technology", route: "/technology" },
];

interface HeaderProps {
  from: HeaderRoute;
}

export const Header = ({ from }: HeaderProps) => {
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);

  return (
    <div className="flex flex-1 m-6 h-fit md:m-0 md:ml-10 lg:mt-10 lg:ml-14">
      <div className="flex flex-1 flex-row items-center justify-between">
        {/* Logo with BG */}
        <div className="bg-white h-fit w-fit rounded-full">
          <img src={Logo} alt="logo" className="h-10 w-10" />
        </div>

        {/* Divider */}
        <div className="hidden flex-1 h-px opacity-25 bg-white mx-5 relative left-12 z-10 lg:flex" />

        {/* Menu Desktop and Tab*/}
        <div className="hidden flex-row min-w-[50%] px-10 align-middle items-center justify-center bg-headerMenuBgColor backdrop-blur-lg md:flex">
          {menu.map((item) => (
            <Link
              to={item.route}
              className={`border-b-2 border-white ${
                from === item.name ? "border-opacity-100" : "border-opacity-0"
              } ml-2 p-4 hover:border-opacity-50`}
            >
              <span className="text-white font-extrabold tracking-widest">
                {`${item.id} `}
                <span className="font-normal">{item.name}</span>
              </span>
              {/* <div className="mt-2 h-0.5 bg-white" /> */}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="flex md:hidden">
          {!isHamMenuOpen && (
            <button
              onClick={() => setIsHamMenuOpen(true)}
              // className="focus:outline-none"
            >
              <img src={HamburgerIcon} alt="ham-icon" />
            </button>
          )}
          <div
            className={`fixed flex flex-row top-0 right-0 h-screen w-full ease-in-out duration-300 ${
              isHamMenuOpen ? "translate-x-0 " : "translate-x-full"
            } z-10`}
          >
            <div
              className="flex flex-1"
              onClick={() => setIsHamMenuOpen(false)}
            />
            <div className="flex flex-col h-screen w-8/12 bg-headerMenuBgColor backdrop-blur-lg">
              <button
                onClick={() => setIsHamMenuOpen(false)}
                className="h-fit w-fit flex justify-self-end self-end m-8"
              >
                <img src={CloseIcon} alt="close-icon" className="h-fit w-fit" />
              </button>

              <div className="flex flex-1 flex-col items-start">
                {menu.map((item) => (
                  <Link
                    onClick={() => setIsHamMenuOpen(false)}
                    to={item.route}
                    className={`flex w-full border-r-4 border-white ${
                      from === item.name
                        ? "border-opacity-100"
                        : "border-opacity-0"
                    } my-5 hover:border-opacity-50`}
                  >
                    <span className="text-white font-extrabold tracking-widest pl-10">
                      {`${item.id} `}
                      <span className="font-normal">{item.name}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
