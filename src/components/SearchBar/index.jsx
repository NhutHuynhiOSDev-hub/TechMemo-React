import React, { useState } from "react";
import { Link } from "react-router";
import { IoSearch } from "react-icons/io5";

import Tags from "../Tags";

function SearchBar() {
  const [keywords, setKeywords] = useState("");

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <input
        className="bg-[#6B6E70] rounded-md p-4 w-full lg:w-1/2 hover:border-3 hover:border-[#86C232] transition-all"
        placeholder="Search article..."
      />
      <Tags />
    </div>
  );
}

export default SearchBar;
