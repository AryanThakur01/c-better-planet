import { Circle } from "lucide-react";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { assets } from "@/assets/assets";
import NewsCard from "./NewsCard";

const LatestNews = () => {
  const donations = [
    {
      image: assets.HomeHero,
      title: "Lorem ipsum dolor sit, amet ",
      date: "3 Sep",
    },
    {
      image: assets.HomeHero,
      title: "Lorem ipsum dolor sit, amet ",
      date: "3 Sep",
    },
    {
      image: assets.HomeHero,
      title: "Lorem ipsum dolor sit, amet ",
      date: "3 Sep",
    },
    {
      image: assets.HomeHero,
      title: "Lorem ipsum dolor sit, amet ",
      date: "3 Sep",
    },
    {
      image: assets.HomeHero,
      title: "Lorem ipsum dolor sit, amet ",
      date: "3 Sep",
    },
  ];
  return (
    <section className="container">
      <div className="flex font-bold items-center text-secondary-foreground">
        <Circle size={16} className="relative fill-secondary-foreground" />
        <Circle size={16} className="relative right-2" />
        <p className="text-sm">OUR LATEST NEWS</p>
      </div>
      <h2 className="text-4xl text-primary my-2 md:w-1/3">
        Latest News And Articles From Clean Heart
      </h2>
      <Carousel className="w-full my-8 mb-20">
        <CarouselContent className="-ml-1 gap-8">
          {donations.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <NewsCard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </section>
  );
};

export default LatestNews;
