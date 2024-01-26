import { assets } from "@/assets/assets";
import React from "react";
import EventCard from "./EventCard";

const EventList = () => {
  const events = [
    // {
    //   title: "Blanket Distribution drive",
    //   date: "03 SEP",
    //   time: "10:00 AM - 2:00 PM",
    //   venue: "350 5th AveNew York, NY 10118 ",
    //   image: assets.HomeHero,
    //   paras: [
    //     "As a part of our ongoing commitment to the welfare of the community, our NGO launched a blanket distribution initiative to provide warmth and comfort to those living in vulnerable conditions.",
    //     "We delivered over 350 blankets to individuals who were exposed to the cold winter nights under flyovers and on pavements in Rajpur, Raipur, Premnagar, ISBT, and Haldwani",
    //   ],
    // },
    {
      title: "Blanket distribution drive",
      image: assets.HomeHero,
      venue: "Rajpur || Raipur || Premnagar || ISBT || Haldwani",
      paras: [
        "As a part of our ongoing commitment to the welfare of the community, our NGO launched a blanket distribution initiative to provide warmth and comfort to those living in vulnerable conditions.",
        "We delivered over 350 blankets to individuals who were exposed to the cold winter nights under flyovers and on pavements.",
      ],
    },
    {
      title: "Cloth Donation Drive",
      image: assets.HomeHero,
      venue: "Rajpur, near Sai Mandir.",
      paras: [
        "Our NGO is grateful for the active participation and generous contribution of kind-hearted individuals, who have enhanced the impact and reach of our efforts.",
        "We collected a donation of 70kg from the homes of our benevolent supporters, and directed this valuable assistance to help those in need.",
      ],
    },
    {
      title: "Food Drive",
      image: assets.HomeHero,
      venue: "ISBT and Premnagar",
      paras: [
        "Through the dedicated efforts of our core volunteers, The Better Planet Society successfully organized food drives, providing nourishment to 80 individuals in need.",
        "The team managed the distribution efficiently and fostered community engagement beyond providing sustenance.",
      ],
    },
  ];
  return (
    <section className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 container gap-8 my-20">
      {events.map((item) => (
        <EventCard key={item.title} {...item} />
      ))}
    </section>
  );
};

export default EventList;
