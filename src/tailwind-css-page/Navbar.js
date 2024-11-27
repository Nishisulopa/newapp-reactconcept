import React, { useState } from "react";
import {
  IoIosArrowDown,
  IoIosClose,
  IoIosMenu,
  IoIosSearch,
} from "react-icons/io";
import swigyimage from "../image/s.png";

const Navbar = () => {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);

  const handelLeftOpen = () => {
    setIsLeftOpen(true);
    document.getElementById("main-content").style.filter = "blur(4px)";
  };

  const handelLeftClose = () => {
    setIsLeftOpen(false);
    document.getElementById("main-content").style.filter = "none";
  };

  const handelRightOpen = () => {
    setIsRightOpen(true);
    document.getElementById("main-content").style.filter = "blur(4px)";
  };

  const handelRightClose = () => {
    setIsRightOpen(false);
    document.getElementById("main-content").style.filter = "none";
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => {
          handelLeftClose();
          handelRightClose();
        }}
        className={`fixed inset-0 cursor-pointer bg-black bg-opacity-50 transition-all duration-300 ${
          isLeftOpen || isRightOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      ></div>

      {/* Left Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-[300px] bg-white shadow-lg z-20 transition-transform duration-300 ${
          isLeftOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={handelLeftClose} className="text-gray-500 text-2xl">
            <IoIosClose />
          </button>
        </div>
        <div className="p-2 text-black">
          <h2 className="text-xl font-bold">Sidebar Content</h2>
          <p>Click cross icon or outside to close.</p>
        </div>
      </div>

      {/* Right Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-[300px] bg-white shadow-lg z-20 transition-transform duration-300 ${
          isRightOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={handelRightClose} className="text-gray-500 text-2xl">
            <IoIosClose />
          </button>
        </div>
        <div className="p-2 text-black">
          <h2 className="text-xl font-bold">Menu</h2>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-gray-500">Home</li>
            <li className="cursor-pointer hover:text-gray-500">About</li>
            <li className="cursor-pointer hover:text-gray-500">Contact</li>
            <li className="cursor-pointer hover:text-gray-500">Career</li>
          </ul>
        </div>
      </div>

      {/* Navbar */}
      <div
        id="main-content"
        className="sticky top-0 bg-gray-400 text-gray-700 z-10"
      >
        <div className="flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="h-[55px] w-[50px] rounded-full flex justify-center items-center ">
              <img src={swigyimage} alt="swiggy image" />
            </h1>
            <div className="flex">
              <p className="p-2 cursor-pointer">
                <span className="border-b-2 border-b-black p-1">Program</span>,
                Hotdeal,
              </p>
              <div className="flex items-center gap-2">
                <h1 className="cursor-pointer">Action</h1>
                <div
                  onClick={handelLeftOpen}
                  className="mt-1 cursor-pointer text-orange-500"
                >
                  <IoIosArrowDown />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            {/*Search bar */}
            <div className="w-[48%] relative hidden md:flex">
              <input
                type="text"
                placeholder="Search here"
                className="p-2 pl-10 rounded-lg w-full border-2 border-gray-300"
              />
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500">
                <IoIosSearch />
              </div>
            </div>
            {/* Links for Desktop */}
            <ul className="hidden md:flex gap-4 items-center">
              <li className="cursor-pointer hover:text-gray-500">Home</li>
              <li className="cursor-pointer hover:text-gray-500">About</li>
              <li className="cursor-pointer hover:text-gray-500">Contact</li>
              <li className="cursor-pointer hover:text-gray-500">Career</li>
            </ul>
          </div>
          {/* Burger Icon for Mobile */}
          <div className="block md:hidden">
            <IoIosMenu
              className="text-2xl cursor-pointer"
              onClick={handelRightOpen}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
