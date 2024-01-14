import { Circle } from "lucide-react";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import TeamMember from "./TeamMember";
import { assets } from "@/assets/assets";

const OurTeam = () => {
  const team = [
    {
      name: "Alan P. Moe",
      desiganation: "Co-Founder & CEO",
      image: assets.HomeHero,
    },
    {
      name: "Alan P. Moe",
      desiganation: "Co-Founder & CEO",
      image: assets.HomeHero,
    },
    {
      name: "Alan P. Moe",
      desiganation: "Co-Founder & CEO",
      image: assets.HomeHero,
    },
    {
      name: "Alan P. Moe",
      desiganation: "Co-Founder & CEO",
      image: assets.HomeHero,
    },
    {
      name: "Alan P. Moe",
      desiganation: "Co-Founder & CEO",
      image: assets.HomeHero,
    },
    {
      name: "Alan P. Moe",
      desiganation: "Co-Founder & CEO",
      image: assets.HomeHero,
    },
  ];
  return (
    <section className="container">
      <div className="flex font-bold items-center text-secondary-foreground">
        <Circle size={16} className="relative fill-secondary-foreground" />
        <Circle
          size={16}
          className="relative right-2 stroke-secondary-foreground"
        />
        <span>Our Expert Team</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 my-8">
        <h1 className="text-primary font-bold text-3xl md:text-5xl">
          Meet The Team Behind Their Success Story
        </h1>
        <p className="text-muted-foreground max-w-xl">
          We help companies develop powerful corporate social responsibility,
          grantmaking, and employee engagement strategies.
        </p>
      </div>
      <Carousel className="w-full my-20">
        <CarouselContent className="-ml-1">
          {team.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <TeamMember {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </section>
  );
};

export default OurTeam;
