import { assets } from "@/assets/assets";
import React from "react";
import { Button } from "../ui/button";
import { ChevronsRight } from "lucide-react";

const Hero = () => {
  return (
    <div
      className="h-[70vh] min-h-[27rem] overflow-hidden flex flex-col justify-center container"
      style={{
        background: `url(${assets.HomeHero.src})no-repeat center center/cover`,
        backgroundColor: "black",
      }}
    >
      <Button
        className="rounded-full w-56 bg-white text-black font-bold"
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
