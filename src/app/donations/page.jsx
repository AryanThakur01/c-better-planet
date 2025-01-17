import { assets } from "@/assets/assets";
import TopCard from "@/components/TopCard";
import Donations from "@/components/donations/Donations";
import React from "react";

const page = () => {
  return (
    <>
      <TopCard title="Donations" image={assets.HomeHero} />
      <Donations />
    </>
  );
};

export default page;
