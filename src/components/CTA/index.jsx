import React from "react";
import { Button } from "../ui/button";

function CTA() {
  return (
    <section className="w-full h-[400px] pt-20 px-10 md:px-60">
      <div className="flex text-white flex-col items-center justify-center py-10 md:py-30 gap-6">
        <h1 className="font-bold text-center">
          Become an Author – Share Your Knowledge!
        </h1>
        <h2 className="font-medium text-center">
          Are you passionate about programming, software development, or sharing
          tech insights? Join our blog as an author and showcase your expertise
          to a growing community of developers and tech enthusiasts! Whether you
          have deep technical knowledge, handy coding tips, or industry
          experiences to share, we welcome you to be part of our growing
          community.
        </h2>

        <Button className={"font-semibold text-white mt-10"}>
          Get Started
        </Button>
      </div>
    </section>
  );
}

export default CTA;
