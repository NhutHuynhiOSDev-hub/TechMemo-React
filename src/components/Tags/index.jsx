import React from "react";
import { Link } from "react-router";

function Tags() {
  const PopularTags = [
    { id: 0, name: "General Programming" },
    { id: 1, name: "Web Development" },
    { id: 2, name: "Mobile Development" },
    { id: 3, name: "AI & Machine Learning" },
    { id: 4, name: "Testing Automatic" },
    { id: 5, name: "Cloud & DevOps" },
    { id: 5, name: "Tech Tools" },
  ];
  return (
    <div className="w-full lg:w-1/2 flex flex-row items-start justify-start gap-4">
      <p className="w-35 font-bold text-sm text-start">Popular Tags: </p>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 justify-center gap-4">
        {PopularTags.map((item, index) => (
          <Link key={index}>
            <div
              key={index}
              className="rounded-md text-white p-2 bg-[#6B6E70] hover:bg-[#86C232] transition-all cursor-pointer"
            >
              <p className="text-sm font-medium text-center">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Tags;
