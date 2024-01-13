import { assets } from "@/assets/assets";
import { Circle, HelpingHand, Stethoscope } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const WhoWeAre = () => {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 pb-20 items-center gap-8">
      <div>
        <div className="flex font-bold items-center text-primary/80">
          <Circle size={16} className="relative fill-primary" />
          <Circle size={16} className="relative right-2" />
          <span>WHO ARE WE</span>
        </div>
        <h2 className="my-4 text-4xl">
          Inspiring and Helping for Better Lifestyle
        </h2>
        <p className="text-muted-foreground my-8">
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas.
        </p>
        <div className="my-12 flex gap-4">
          <Button className="flex gap-2 h-12">
            <span>Become A Volunteer</span>
            <HelpingHand className="bg-secondary rounded h-8 w-8 p-1" />
          </Button>
          <Button variant="outline" className="flex gap-2 h-12">
            <span>Medical And Health</span>
            <Stethoscope className="bg-primary text-white rounded h-8 w-8 p-1" />
          </Button>
        </div>
      </div>
      <div>
        <Image
          src={assets.HomeHero}
          height={1000}
          width={1000}
          className="w-full rounded-xl"
        />
      </div>
    </section>
  );
};

export default WhoWeAre;
