import { assets } from "@/assets/assets";
import { ChevronsRight, Circle } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const HelpNow = () => {
  return (
    <section className="container grid md:grid-cols-2 grid-cols-1 my-20 text-primary/70 gap-16">
      <div className="my-auto">
        <Image
          src={assets.HomeHero}
          height={1000}
          width={1000}
          className="rounded-full"
        />
      </div>
      <div>
        <div className="flex font-bold items-center">
          <Circle size={16} className="relative fill-primary" />
          <Circle size={16} className="relative right-2" />
          <p className="text-sm">Help people now</p>
        </div>
        <h2 className="text-5xl text-primary my-8">
          Charity For The People You Care About
        </h2>
        <div className="flex gap-4 items-center">
          <p>
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas.
          </p>
        </div>
        <div className="flex gap-8 flex-wrap mt-8">
          <Button className="bg-secondary flex gap-2 h-14 rounded-full hover:bg-secondary/90">
            <ChevronsRight className="bg-primary rounded-full h-8 w-8 p-1" />
            <span className="text-primary">Become A Volunteer</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HelpNow;
