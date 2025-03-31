import React from "react";
import { FaCheck } from "react-icons/fa6";

function ArticleItem() {
  return (
    <div className="w-full bg-[#474B4F] hover:bg-[#61892F] transition-all duration-300 rounded-2xl flex flex-col items-center justify-center">
      <img
        className="w-full h-[200px] object-cover object-center rounded-t-2xl"
        alt="article"
        src="https://media.istockphoto.com/id/1193278024/vector/application-of-smartphone-with-business-graph-and-analytics-data-on-isometric-mobile-phone.jpg?s=612x612&w=0&k=20&c=cV3zqN7LAi6_qAqW45_vZMg7HVRSt4_2NV-SRJ-FK04="
      />
      <div className="flex flex-col p-6 gap-2">
        <h2 className="font-bold text-xl md:text-2xl line-clamp-2 text-start">
          The Mobile Development Tech Stack for 2025
        </h2>
        <p className="text-start text-md line-clamp-2">
          The mobile development tech stack for 2025 is expected to focus
          heavily on cross-platform development tools, enhanced performance, and
          seamless...
        </p>
        <div className="flex flex-row items-end justify-between">
          <div className="flex flex-row gap-2 items-center justify-start mt-6">
            <img
              className="rounded-full w-10 h-10 md:w-12 md:h-12 object-cover"
              src="https://media.licdn.com/dms/image/v2/D4E12AQE5dGJkkONZzA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1674142199579?e=2147483647&v=beta&t=ceHzm67Gd0uQqIXDKBqt1N_tQqVvGKUI_iy5UGurfqs"
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="font-bold italic text-md">Mockup AI Person</h4>
              <div className="flex items-center justify-start gap-2">
                <span className="p-1 bg-[#86C232] rounded-full text-xs">
                  <FaCheck />
                </span>

                <p className="text-sm italic">Verified writer</p>
              </div>
            </div>
          </div>
          <span className="font-bold italic text-white text-sm">
            02 Jan, 2025
          </span>
        </div>
      </div>
    </div>
  );
}

export default ArticleItem;
