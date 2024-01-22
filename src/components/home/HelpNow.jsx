import { assets } from "@/assets/assets";
import { ChevronsRight, Circle } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const HelpNow = () => {
  return (
    <section className="container grid md:grid-cols-2 grid-cols-1 my-20 py-20 text-primary/70 gap-16 bg-primary">
      <div className="my-auto relative right-24 bg-secondary flex gap-8 justify-end p-8 rounded-r-full overflow-hidden">
        <Image src={assets.Helping} width={350} className="rounded-full" />
        <Image src={assets.Helping} width={350} className="rounded-full" />
      </div>
      <div className="text-white flex flex-col justify-center">
        <div className="flex font-bold items-center">
          <Circle size={16} className="relative fill-white" />
          <Circle size={16} className="relative right-2" />
          <p className="text-sm">HELP PEOPLE NOW</p>
        </div>
        <h2 className="text-3xl md:text-5xl text-white my-8 font-bold">
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
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-secondary flex gap-2 h-14 rounded-full hover:bg-secondary/90",
            )}
          >
            <ChevronsRight className="bg-primary rounded-full h-8 w-8 p-1" />
            <span className="text-primary font-bold">Become A Volunteer</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HelpNow;
