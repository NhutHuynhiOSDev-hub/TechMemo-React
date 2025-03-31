import React from "react";
import Tags from "../Tags";
import SearchBar from "../SearchBar";

function Hero() {
  return (
    <section className="w-full pt-20 px-10 md:px-20">
      <div className="flex text-white flex-col items-center justify-center py-10 md:py-30 gap-6">
        <h1 className="font-bold text-center text-lg">
          Code Smarter, Build Faster.
        </h1>
        <h3 className="font-medium text-center">
          Essential programming tips, tricks, and best practices to level up
          your coding skills.
        </h3>
      </div>
      <SearchBar />
    </section>
  );
}

export default Hero;
