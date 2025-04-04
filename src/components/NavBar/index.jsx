import React, { useState } from "react";
import { Link } from "react-router";
import { IoSearch } from "react-icons/io5";

function NavBar() {
  const [isShowSearchBox, setIsShowSearchBox] = useState(false);

  return (
    <nav className="stick w-full h-20 z-10 px-10 md:px-20 py-5 top-0 flex items-center justify-between gap-12 border-b border-stone-200 bg-white">
      <Link to={"/"}>
        <img
          src="vite.svg"
          className="w-10 flex-none cursor-pointer"
          alt="logo"
        />
      </Link>
      <div
        className={`absolute md:relative w-full left-0 top-20 md:top-0 px-10 md:px-0 py-6 border-b border-stone-200 md:border-none transition-all ${
          isShowSearchBox
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none duration-100"
        } md:opacity-100 md:pointer-events-auto`}
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-full md:w-1/4 p-4 md:pl-12 bg-stone-100 rounded-full placeholder:text-stone-500 placeholder:text-sm md:placeholder:text-md focus:bg-transparent"
        />
        <IoSearch className="absolute right-14 md:pointer-events-none md:left-5 top-1/2 text-xl text-stone-500 -translate-y-1/2" />
      </div>
      <div
        className="md:hidden w-10 h-10 p-2 rounded-full bg-stone-100 cursor-pointer"
        onClick={() => {
          setIsShowSearchBox(!isShowSearchBox);
        }}
      >
        <IoSearch className="text-xl text-stone-500" />
      </div>
    </nav>
  );
}

export default NavBar;
