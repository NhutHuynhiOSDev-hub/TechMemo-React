import React, { useState } from "react";
import { Link } from "react-router";
import { IoSearch } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";

function NavBar() {
  const [isShowSearchBox, setIsShowSearchBox] = useState(false);

  return (
    <nav className="stick w-full h-20 px-10 lg:px-20 py-5 top-0 flex items-center justify-between border-b border-stone-200 bg-white gap-2 md:gap-5">
      <div className="w-full h-full flex flex-row items-center justify-start gap-2 md:gap-5">
        <Link to={"/"}>
          <img
            src="vite.svg"
            className="w-10 flex-none cursor-pointer"
            alt="logo"
          />
        </Link>
        <div
          className={`absolute md:relative w-full md:w-1/2 h-full left-0 top-20 md:top-0 px-10 md:px-0 border-b border-stone-200 md:border-none transition-all ${
            isShowSearchBox
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none duration-100"
          } md:opacity-100 md:pointer-events-auto`}
        >
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-full md:pl-12 bg-stone-200 rounded-full placeholder:text-stone-500 placeholder:text-sm md:placeholder:text-md focus:bg-transparent"
          />
          <IoSearch className="absolute right-14 md:pointer-events-none md:left-5 top-1/2 text-xl text-stone-500 -translate-y-1/2" />
        </div>
      </div>
      <div className="flex flex-row items-center gap-2 md:gap-5">
        <div
          className="md:hidden w-10 h-10 p-2 rounded-full bg-stone-200 cursor-pointer"
          onClick={() => {
            setIsShowSearchBox(!isShowSearchBox);
          }}
        >
          <IoSearch className="text-xl text-stone-500" />
        </div>
        <Link to={"/"} className="hidden md:flex flex-row items-center gap-2">
          <TfiWrite />
          <p>Write</p>
        </Link>

        <Link
          to={"/login"}
          className="p-2 whitespace-nowrap font-medium bg-black font-inter text-white rounded-full py-2 md:py-3 px-4 md:px-5  text-sm md-text-md capitalize "
        >
          Login
        </Link>
        <Link
          to={"/signup"}
          className="p-2 whitespace-nowrap font-medium bg-stone-200 text-black rounded-full py-2 md:py-3 px-4 md:px-5 text-sm md-text-md capitalize hidden md:flex"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
