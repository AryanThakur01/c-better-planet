import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DonationCard from "./DonationCard";
import { assets } from "@/assets/assets";

const HelpAndDonate = () => {
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
    <section className="container bg-primary/70 pt-16 flex flex-col items-center mb-40">
      <h2 className="text-center text-white text-2xl font-bold">
        HELP & DONATE US
      </h2>
      <Carousel className="w-full relative top-28">
        <CarouselContent className="-ml-1">
          {donations.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <DonationCard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </section>
  );
};

export default HelpAndDonate;
