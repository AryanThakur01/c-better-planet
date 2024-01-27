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
      image: assets.CyberSecurity,
      title:
        "To train, support, and raise awareness on cyber safety and ethics",
      date: "03 Sep",
    },
    {
      image: assets.HabitatConservation,
      title:
        "To campaign, educate, and engage on social and environmental issues",
      date: "03 Sep",
    },
    {
      image: assets.SexualHarassment2,
      title:
        "To provide legal aid, counseling, and rehabilitation to survivors of sexual harassment",
      date: "03 Sep",
    },
    {
      image: assets.CareerGuide,
      title: "To inform, mentor, and empower students for better careers",
      date: "03 Sep",
    },
    {
      image: assets.MenstrualHealth,
      title:
        "To distribute sanitary products and promote menstrual health and hygiene",
      date: "03 Sep",
    },
    {
      image: assets.RecycleReuse,
      title: "To reduce waste and pollution and save resources and energy",
      date: "03 Sep",
    },
    {
      image: assets.HabitatConservation,
      title: "To protect and restore forests, wetlands, rivers, and oceans",
      date: "03 Sep",
    },
  ];
  return (
    <section className="container my-20">
      <div className="flex font-bold items-center text-secondary-foreground">
        <Circle size={16} className="relative fill-secondary-foreground" />
        <Circle size={16} className="relative right-2" />
        <p className="text-sm">FURTHER PLANNING FOR</p>
      </div>
      <h2 className="font-bold text-3xl md:text-5xl text-primary my-2 md:w-1/2">
        Our Objectives
      </h2>
      <Carousel className="md:px-12 px-4 w-full my-8 mb-20">
        <CarouselContent className="-ml-1 gap-8 p-4">
          {donations.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <NewsCard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="md:left-2 left-[-1rem] " />
        <CarouselNext className="md:right-2 right-[-1rem] " />
      </Carousel>
    </section>
  );
};

export default LatestNews;
