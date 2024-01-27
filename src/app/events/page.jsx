import React from "react";
import TopCard from "@/components/TopCard";
import { assets } from "@/assets/assets";
import EventList from "@/components/events/EventList";

const page = () => {
  return (
    <>
      <TopCard image={assets.EventHero} title="Events" />
      <EventList />
    </>
  );
};

export default page;
