import React from "react";
import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="bg-bkgprimary text-white font-custom">
      <link rel="icon" href="/public/next.svg" sizes="any" />
      <div className="bg-gradient-to-br from-transparent via-black/20 to-black/50">
        <Header />
        <AboutMe />
      </div>
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default page;
