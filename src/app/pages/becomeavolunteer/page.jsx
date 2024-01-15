import { assets } from "@/assets/assets";
import TopCard from "@/components/TopCard";
import BecomeAVolunteer from "@/components/pages/BecomeAVolunteer/BecomeAVolunteer";
import React from "react";

const page = () => {
  return (
    <>
      <TopCard image={assets.DonateNow} title="Become A Volunteer" />
      <BecomeAVolunteer />
    </>
  );
};

export default page;
