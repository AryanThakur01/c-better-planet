import { assets } from "@/assets/assets";
import { Circle } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const HelpingHand = () => {
  const helpingHand = [
    {
      image: assets.Lifestyle,
      title: "Food Support",
      collected: "$2.5M",
    },
    {
      image: assets.Lifestyle,
      title: "Food Support",
      collected: "$2.5M",
    },
    {
      image: assets.Lifestyle,
      title: "Food Support",
      collected: "$2.5M",
    },
    {
      image: assets.Lifestyle,
      title: "Food Support",
      collected: "$2.5M",
    },
  ];
  return (
    <section className="my-20 container">
      <div className="flex font-bold items-center text-secondary-foreground justify-center">
        <Circle size={16} className="relative fill-secondary-foreground" />
        <Circle size={16} className="relative right-2" />
        <span>Worldwide non profit charity</span>
      </div>
      <h3 className="font-bold text-primary text-center text-3xl md:text-5xl max-w-[37rem] mx-auto">
        Give a Helping Hand a For Needy People
      </h3>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-4">
        {/*%4 2 ya 3 hoga*/}
        {helpingHand.map((item, i) => (
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 group overflow-hidden cursor-pointer"
            key={item.title}
          >
            <div
              className={cn(
                "overflow-hidden rounded-xl bg-black",
                (i % 4 === 2 || i % 4 === 3) && "md:order-1",
              )}
            >
              <Image
                src={assets.HomeHero}
                alt="Foods Support"
                className="rounded-xl group-hover:scale-105 transition-all"
              />
            </div>
            <Button
              className={cn(
                "rounded-xl h-full bg-muted group-hover:bg-primary group group-hover:text-white text-primary transition-all duration-500",
              )}
            >
              <p className="flex flex-col">
                <span className="font-bold text-2xl">Foods Support</span>
                <span className="bg-secondary py-2 rounded-full my-4 text-primary font-bold">
                  Collected $2.5M
                </span>
              </p>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HelpingHand;
