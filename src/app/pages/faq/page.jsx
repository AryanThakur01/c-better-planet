import React from "react";
import TopCard from "@/components/TopCard";
import { assets } from "@/assets/assets";
import RecentQuestions from "@/components/about/RecentQuestions";

const page = () => {
  return (
    <>
      <TopCard title="FAQs" image={assets.DonateNow} />
      <RecentQuestions parentClass="bg-white" />
    </>
  );
};

export default page;
