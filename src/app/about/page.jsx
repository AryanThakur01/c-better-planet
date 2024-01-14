import { assets } from "@/assets/assets";
import TopCard from "@/components/TopCard";
import OurTeam from "@/components/about/OurTeam";
import RecentQuestions from "@/components/about/RecentQuestions";
import Story from "@/components/about/Story";
import About from "@/components/home/About";
import React from "react";

const page = () => {
  return (
    <>
      <TopCard title="About Us" image={assets.HomeHero} />
      <About />
      <Story />
      <OurTeam />
      <RecentQuestions />
    </>
  );
};

export default page;
