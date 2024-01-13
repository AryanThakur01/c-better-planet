import { assets } from "@/assets/assets";
import { Circle } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const HelpingHand = () => {
  return (
    <section className="my-20 container">
      <div className="flex font-bold items-center text-secondary-foreground justify-center">
        <Circle size={16} className="relative fill-secondary-foreground" />
        <Circle size={16} className="relative right-2" />
        <span>Worldwide non profit charity</span>
      </div>
      <h3 className="font-bold text-primary text-center text-4xl max-w-96 mx-auto">
        Give a Helping Hand a For Needy People
      </h3>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 group overflow-hidden cursor-pointer">
          <div className="overflow-hidden rounded-xl bg-black">
            <Image
              src={assets.HomeHero}
              alt="Foods Support"
              className="rounded-xl group-hover:scale-105 transition-all"
            />
          </div>
          <Button className="rounded-xl h-full bg-muted group-hover:bg-primary group group-hover:text-white text-primary">
            <p className="flex flex-col">
              <span className="font-bold text-2xl">Foods Support</span>
              <span className="bg-secondary py-2 rounded-full my-4">
                Collected $2.5M
              </span>
            </p>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 group overflow-hidden cursor-pointer">
          <div className="overflow-hidden rounded-xl bg-black">
            <Image
              src={assets.HomeHero}
              alt="Foods Support"
              className="rounded-xl group-hover:scale-105 transition-all"
            />
          </div>
          <Button className="rounded-xl h-full bg-muted group-hover:bg-primary group group-hover:text-white text-primary">
            <p className="flex flex-col">
              <span className="font-bold text-2xl">Foods Support</span>
              <span className="bg-secondary py-2 rounded-full my-4">
                Collected $2.5M
              </span>
            </p>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 group overflow-hidden cursor-pointer">
          <Button className="rounded-xl h-full bg-muted group-hover:bg-primary group group-hover:text-white text-primary">
            <p className="flex flex-col">
              <span className="font-bold text-2xl">Foods Support</span>
              <span className="bg-secondary py-2 rounded-full my-4">
                Collected $2.5M
              </span>
            </p>
          </Button>
          <div className="overflow-hidden rounded-xl bg-black">
            <Image
              src={assets.HomeHero}
              alt="Foods Support"
              className="rounded-xl group-hover:scale-105 transition-all"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 group overflow-hidden cursor-pointer">
          <Button className="rounded-xl h-full bg-muted group-hover:bg-primary group group-hover:text-white text-primary">
            <p className="flex flex-col">
              <span className="font-bold text-2xl">Foods Support</span>
              <span className="bg-secondary py-2 rounded-full my-4">
                Collected $2.5M
              </span>
            </p>
          </Button>
          <div className="overflow-hidden rounded-xl bg-black">
            <Image
              src={assets.HomeHero}
              alt="Foods Support"
              className="rounded-xl group-hover:scale-105 transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpingHand;
