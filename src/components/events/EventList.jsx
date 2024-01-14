import { assets } from "@/assets/assets";
import React from "react";
import EventCard from "./EventCard";

const EventList = () => {
  const events = [
    {
      title:
        "Let’s education for children get good life style with go us Our donation is hope",
      date: "03 SEP",
      time: "10:00 AM - 2:00 PM",
      organizer: "Ashton Porter",
      venue: "350 5th AveNew York, NY 10118 ",
      image: assets.HomeHero,
    },
    {
      title:
        "Let’s education for children get good life style with go us Our donation is hope",
      date: "03 SEP",
      time: "10:00 AM - 2:00 PM",
      organizer: "Ashton Porter",
      venue: "350 5th AveNew York, NY 10118 ",
      image: assets.HomeHero,
    },
    {
      title:
        "Let’s education for children get good life style with go us Our donation is hope",
      date: "03 SEP",
      time: "10:00 AM - 2:00 PM",
      organizer: "Ashton Porter",
      venue: "350 5th AveNew York, NY 10118 ",
      image: assets.HomeHero,
    },
    {
      title:
        "Let’s education for children get good life style with go us Our donation is hope",
      date: "03 SEP",
      time: "10:00 AM - 2:00 PM",
      organizer: "Ashton Porter",
      venue: "350 5th AveNew York, NY 10118 ",
      image: assets.HomeHero,
    },
    {
      title:
        "Let’s education for children get good life style with go us Our donation is hope",
      date: "03 SEP",
      time: "10:00 AM - 2:00 PM",
      organizer: "Ashton Porter",
      venue: "350 5th AveNew York, NY 10118 ",
      image: assets.HomeHero,
    },
  ];
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 container gap-8 my-20">
      {events.map((item) => (
        <EventCard key={item.title} {...item} />
      ))}
    </section>
  );
};

export default EventList;
