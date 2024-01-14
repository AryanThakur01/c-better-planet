import { assets } from "@/assets/assets";
import TopCard from "@/components/TopCard";
import Contact from "@/components/contact/Contact";
import React from "react";

const page = () => {
  return (
    <>
      <TopCard image={assets.HomeHero} title="Contact Us" />
      <Contact />
    </>
  );
};

export default page;
