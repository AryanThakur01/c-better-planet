import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { assets } from "@/assets/assets";
import DonationCard from "../home/DonationCard";

const Donations = () => {
  const donations = [
    {
      image: assets.HomeHero,
      goal: 90000,
      raised: 60000,
      title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      image: assets.HomeHero,
      goal: 100000,
      raised: 60000,
      title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      image: assets.HomeHero,
      goal: 60000,
      raised: 60000,
      title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      image: assets.HomeHero,
      goal: 90000,
      raised: 60000,
      title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      image: assets.HomeHero,
      goal: 90000,
      raised: 60000,
      title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
  ];
  return (
    <section className="container my-20 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      {donations.map((item, index) => (
        <DonationCard {...item} key={item.title} />
      ))}
    </section>
  );
};

export default Donations;
