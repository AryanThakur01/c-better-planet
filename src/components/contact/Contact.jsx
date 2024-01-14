import React from "react";
import { Button } from "../ui/button";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Contact = () => {
  return (
    <section className="container grid md:grid-cols-2 grid-cols-1 my-20 gap-8">
      <div className="hidden md:block">
        <Image src={assets.HomeHero} className="h-full rounded-xl" />
      </div>
      <div className="p-8 flex flex-col gap-4 bg-secondary/30 rounded-2xl">
        <h2 className="text-2xl text-primary">Leave Us A Message</h2>
        <input
          type="text"
          className="rounded-full p-4"
          placeholder="Enter Your Name"
        />
        <input
          type="email"
          className="rounded-full p-4"
          placeholder="Enter Your Email"
        />
        <input
          type="text"
          className="rounded-full p-4"
          placeholder="Phone No."
        />
        <input type="text" className="rounded-full p-4" placeholder="Subject" />
        <textarea
          className="rounded-2xl p-4 resize-none h-36"
          placeholder="Write Message..."
        />
        <Button className="bg-secondary flex gap-2 h-14 rounded-full hover:bg-secondary/90 w-44">
          <ChevronsRight className="bg-primary rounded-full h-8 w-8 p-1" />
          <span className="text-primary">More About Us</span>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
