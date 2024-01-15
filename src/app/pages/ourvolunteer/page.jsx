import { assets } from "@/assets/assets";
import TopCard from "@/components/TopCard";
import Volunteers from "@/components/pages/OurVolunteer/Volunteers";
import React from "react";

const page = () => {
  return (
    <>
      <TopCard image={assets.Lifestyle} title={"Our Volunteers"} />
      <Volunteers />
    </>
  );
};

export default page;
