import { assets } from "@/assets/assets";
import TopCard from "@/components/TopCard";
import Gallery from "@/components/pages/gallery/Gallery";
import React from "react";

const page = () => {
  return (
    <>
      <TopCard title="Gallery" image={assets.TaxBenefit} />
      <Gallery />
    </>
  );
};

export default page;
