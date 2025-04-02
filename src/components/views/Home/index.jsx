import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Hero from "@/components/Hero";
import Articles from "@/components/Articles";
import CTA from "@/components/CTA";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Articles />
      <CTA />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
