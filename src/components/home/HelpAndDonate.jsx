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
      goal: 100,
      raised: 80,
      title: "Cyber security",
      detail:
        "We combat cyber crimes like hacking, phishing, identity theft, and online fraud. Our focus includes aiding victims, providing training, and promoting awareness about cyber safety and ethics.",
    },
    {
      image: assets.HomeHero,
      goal: 100,
      raised: 80,
      title: "Sexual harassment",
      detail:
        "We combat all forms of sexual harassment—physical, verbal, and online. Our efforts include providing legal aid, counseling, and rehabilitation for survivors, as well as advocating for stronger laws and policies.",
    },
    {
      image: assets.HomeHero,
      goal: 100,
      raised: 80,
      title: "Career guidance",
      detail:
        "We inspire students for successful careers through mentoring, opportunities, and skill development, fostering confidence and achieving goals.",
    },
    {
      image: assets.HomeHero,
      goal: 100,
      raised: 80,
      title: "Menstrual health",
      detail:
        "We educate on menstrual hygiene in underserved areas, providing free or low-cost sanitary products and promoting eco-friendly disposal.",
    },
    {
      image: assets.HomeHero,
      goal: 100,
      raised: 80,
      title: "Habitat conservation",
      detail:
        "We preserve biodiversity by safeguarding habitats and promoting sustainability through practices like organic farming, rainwater harvesting, and waste segregation with composting.",
    },
    {
      image: assets.HomeHero,
      goal: 100,
      raised: 80,
      title: "Recycling and reusing",
      detail:
        "We recycle materials—paper, plastic, metal, cloth—cutting waste, pollution, and saving resources. Our mission promotes a minimalist, circular lifestyle, urging less consumption and more reusability.",
    },
  ];
  return (
    <section className="container bg-[#3c2343] pt-16 flex flex-col items-center mb-40">
      <h2 className="text-center text-white text-2xl font-bold">
        OUR PROJECTS
      </h2>
      <Carousel className="w-full relative top-28 md:px-12 px-4">
        <CarouselContent className="-ml-1 py-8">
          {donations.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <DonationCard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="md:left-2 left-[-1rem]" />
        <CarouselNext className="md:right-2 right-[-1rem]" />
      </Carousel>
    </section>
  );
};

export default HelpAndDonate;
