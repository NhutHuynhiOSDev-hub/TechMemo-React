import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Hero from "@/components/Hero";
import Articles from "@/components/Articles";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Articles />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
