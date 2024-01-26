import { assets } from "@/assets/assets";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { ChevronsRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="md:h-[95vh] min-h-[32rem] overflow-hidden flex flex-col justify-center container relative z-10 w-full border-[0.8rem] border-white rounded-[2rem]"
      style={{
        background: `url(${assets.HomeHero.src})no-repeat center center/cover`,
      }}
    >
      <div className="absolute h-full w-full z-[-1] inset-0 bg-black opacity-65" />
      <Link
        href="/contact"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "rounded-full w-56 text-secondary hover:bg-secondary/10 hover:text-secondary font-bold border-secondary bg-transparent",
        )}
      >
        Reach out for Queries
      </Link>
      <h1 className="max-w-[72rem] my-4 text-wite font-bold text-4xl md:text-6xl flex flex-col text-white">
        Building a better planet through awareness, action, and innovation
      </h1>
      <div>
        <Link
          href="/pages/becomeavolunteer"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "bg-secondary rounded-full flex items-center gap-3 h-14 w-48",
          )}
        >
          <ChevronsRight className="bg-primary text-white rounded-full h-8 w-8" />
          <span className="text-lg text-primary">Join With Us</span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
