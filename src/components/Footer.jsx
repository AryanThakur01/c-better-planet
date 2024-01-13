import { assets } from "@/assets/assets";
import { Mail, MapPin, PhoneCall, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 container py-16 bg-muted-foreground/20">
      <div>
        <h3 className="text-2xl">LOGO</h3>
        <p className="text-muted-foreground my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          deleniti?
        </p>
        <Link
          href="/"
          className="flex gap-2 items-center text-secondary-foreground text-sm font-bold"
        >
          <span>View Map</span>
          <Send size={16} />
        </Link>
      </div>
      <div>
        <h3 className="text-2xl border-b-2 border-b-secondary-foreground w-fit">
          Get In Touch
        </h3>
        <ul className="my-4 text-muted-foreground text-md flex flex-col gap-2">
          <li className="flex gap-4">
            <MapPin className="stroke-primary" />
            <span>Lorem ipsum dolor sit amet. Lorem ipsum </span>
          </li>
          <li className="flex gap-3">
            <PhoneCall className="stroke-primary" size={20} />
            <span>+91 235678013</span>
          </li>
          <li className="flex gap-3">
            <Mail className="stroke-primary" />
            <span>needhelp@company.com</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl border-b-2 border-b-secondary-foreground w-fit">
          Quick Links
        </h3>
        <ul className="my-4 text-muted-foreground text-md flex flex-col gap-2">
          <li className="flex gap-4">
            <span>About Us</span>
          </li>
          <li className="flex gap-3">
            <span>Give Donation</span>
          </li>
          <li className="flex gap-3">
            <span>Education Support</span>
          </li>
          <li className="flex gap-3">
            <span>Our Campaign</span>
          </li>
          <li className="flex gap-3">
            <span>Contact Us</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl border-b-2 border-b-secondary-foreground w-fit">
          Our Gallery
        </h3>
        <div className="grid grid-cols-2 gap-4 my-4">
          <Image src={assets.HomeHero} className="rounded-lg" />
          <Image src={assets.HomeHero} className="rounded-lg" />
          <Image src={assets.HomeHero} className="rounded-lg" />
          <Image src={assets.HomeHero} className="rounded-lg" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
