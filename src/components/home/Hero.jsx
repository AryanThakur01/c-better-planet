import { assets } from "@/assets/assets";
import React from "react";
import { Button } from "../ui/button";
import { ChevronsRight } from "lucide-react";

const Hero = () => {
  return (
    <div
      className="md:h-[70vh] h-[40rem] min-h-[27rem] overflow-hidden flex flex-col justify-center container relative z-10"
      style={{
        background: `url(${assets.HomeHero.src})no-repeat center center/cover`,
      }}
    >
      <div className="absolute h-full w-full z-[-1] inset-0 bg-black opacity-65" />
      <Button
        className="rounded-full w-56 text-secondary hover:bg-secondary/10 hover:text-secondary font-bold border-secondary bg-transparent"
        variant="outline"
      >
        Give a helping hand for child
      </Button>
      <h1 className="my-4 text-wite font-bold text-6xl flex flex-col text-white">
        <span>Lend A Helping Hand</span>
        <span>To Who Those Need It</span>
      </h1>
      <div>
        <Button
          className="bg-secondary rounded-full flex items-center gap-3 h-14"
          variant="secondary"
        >
          <ChevronsRight className="bg-primary text-white rounded-full h-8 w-8" />
          <span className="text-lg">Join With Us</span>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
