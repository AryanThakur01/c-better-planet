import { assets } from "@/assets/assets";
import {
  ChevronsRight,
  Circle,
  CircleDollarSign,
  PhoneCall,
  PiggyBank,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import QuantityCard from "./QuantityCard";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const About = () => {
  const quantities = [
    {
      icon: <UsersRound size={40} />,
      title: "Join Our Team",
      quantity: 6472,
    },
    {
      icon: <PiggyBank size={40} />,
      title: "Donate Now",
      quantity: 38768,
      symbol: "$",
    },
    {
      icon: <CircleDollarSign size={40} />,
      title: "Total Fund Raised",
      quantity: 1193210,
    },
  ];
  return (
    <section className="container grid md:grid-cols-2 grid-cols-1 my-20 text-primary/70 gap-16">
      <div className="my-auto p-10 bg-[#e1dbd3] flex justify-end rounded-r-full relative right-24 w-[110%]">
        <Image
          src={assets.Helping}
          width={1000}
          className="rounded-full w-[80%]"
        />
      </div>
      <div>
        <div className="flex font-bold items-center text-secondary-foreground">
          <Circle size={16} className="relative fill-secondary-foreground" />
          <Circle size={16} className="relative right-2" />
          <p className="text-sm">ABOUT CLEAN HEART</p>
        </div>
        <h2 className="text-3xl md:text-6xl font-bold text-primary my-8">
          Helping Each Other can Make World Better
        </h2>
        <div className="flex gap-4 items-center flex-wrap md:flex-nowrap">
          <Image
            src={assets.HomeHero}
            height={200}
            width={200}
            className="h-20 rounded-full w-40"
          />
          <p>
            We help companies develop powerful corporate social responsibility,
            grantmaking, and employee engagement strategies.
          </p>
        </div>
        <div className="my-8 border-t border-b py-4 flex justify-center gap-4 flex-col md:flex-row">
          {quantities.map((item) => (
            <QuantityCard {...item} key={item.title} />
          ))}
        </div>
        <div className="flex gap-8 flex-wrap">
          <Link
            href="/about"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-secondary gap-2 h-14 rounded-full hover:bg-secondary/90 items-center w-44",
            )}
          >
            <ChevronsRight className="bg-primary rounded-full h-8 w-8 p-1 text-white" />
            <span className="text-primary">More About Us</span>
          </Link>
          <div className="md:px-8 flex items-center md:border-l-2 gap-4">
            <div className="border rounded-full p-2 border-primary">
              <PhoneCall className="h-8 w-8 fill-primary/80 stroke-none" />
            </div>
            <div className="flex flex-col justify-center text-muted-foreground">
              <h3>Call Any Time</h3>
              <Link
                href="tel:+91 2659302003"
                className="font-bold text-primary hover:underline"
              >
                +91 2659 302 003
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
