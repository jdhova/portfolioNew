import AboutSection from "@components/layout/About-Section";
import Footer from "@components/layout/Footer";
import Header from "@components/layout/Header";
import HeroSection from "@components/layout/Hero-Section";
import ProjectSection from "@components/layout/Project-Section";
import Head from "next/head";
import AppData from "@components/Portfolio Data/Data.json";
import ContactSection from "@components/layout/Contact-Section";
import { useState } from "react";

export default function Home() {
  let [sectionDisplay,setSectionDisplay] = useState("about")
  function detectSection(value){
    setSectionDisplay(value)
  }

  return (
    <>
      <Head>
        <title>Portfolio | Jude</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection {...AppData.Banner} />
      <div className="bg-white">
        <Header section={sectionDisplay} />
        <AboutSection detectSection={detectSection} {...AppData.About} />
        <ProjectSection detectSection={detectSection} {...AppData.Projects} />
        <ContactSection detectSection={detectSection} {...AppData.Contact}/>
        <Footer {...AppData.Footer}/>
      </div>
    </>
  );
}
