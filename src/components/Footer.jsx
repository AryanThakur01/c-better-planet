import { assets } from "@/assets/assets";
import { Mail, MapPin, PhoneCall, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 container py-16 bg-muted-foreground/20">
      <div>
        <h3 className="text-2xl">BetterPlanet</h3>
        <p className="text-muted-foreground my-4">
          Building a better planet through awareness, action, and innovation
        </p>
        <Link
          href="https://www.google.com/maps/place/ATS+Arcade/@30.3521225,78.080567,18z/data=!4m10!1m2!2m1!1s01,2nd+floor,+ATS+Arcade,+Sahastradhara+Rd,+opposite+KFC,+Govind+Vihar,+Dehradun,+Uttarakhand+248001!3m6!1s0x3908d73a831fda29:0x9ebe425c5f7204f7!8m2!3d30.352397!4d78.0811149!15sCmQwMSwybmQgZmxvb3IsIEFUUyBBcmNhZGUsIFNhaGFzdHJhZGhhcmEgUmQsIG9wcG9zaXRlIEtGQywgR292aW5kIFZpaGFyLCBEZWhyYWR1biwgVXR0YXJha2hhbmQgMjQ4MDAxIgOIAQGSARRjb25zdHJ1Y3Rpb25fY29tcGFueeABAA!16s%2Fg%2F11tdn1cdc0?entry=ttu"
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
            <span>
              <MapPin className="stroke-primary" size={20} />
            </span>
            <span>
              01,2nd floor, ATS Arcade, Sahastradhara Rd, opposite KFC, Govind
              Vihar, Dehradun, Uttarakhand 248001
            </span>
          </li>
          <li className="flex gap-3">
            <span>
              <PhoneCall className="stroke-primary" size={20} />
            </span>
            <Link
              href="tel:+91 81929 09000"
              className="hover:underline underline-offset-4"
            >
              +91 81929 09000
            </Link>
          </li>
          <li className="flex gap-3">
            <span>
              <Mail className="stroke-primary" size={20} />
            </span>
            <Link
              href="mailto:support@cyberjagriti.org"
              className="hover:underline underline-offset-4"
            >
              support@cyberjagriti.org
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl border-b-2 border-b-secondary-foreground w-fit">
          Quick Links
        </h3>
        <ul className="my-4 text-muted-foreground text-md flex flex-col gap-2">
          <NavLink link="/home" text="Home" />
          <NavLink link="/about" text="About Us" />
          <NavLink link="/events" text="Events" />
          <NavLink link="/contact" text="Contact" />
          <NavLink link="/pages/becomeavolunteer" text="Become A Volunteer" />
        </ul>
      </div>
      <div>
        <h3 className="text-2xl border-b-2 border-b-secondary-foreground w-fit">
          Our Gallery
        </h3>
        <div className="grid grid-cols-2 gap-4 my-4">
          <Image
            src={assets.SexualHarassment2}
            className="rounded-lg min-h-full"
          />
          <Image src={assets.AboutHero} className="rounded-lg" />
          <Image src={assets.CyberSecurity} className="rounded-lg" />
          <Image src={assets.MenstrualHealth} className="rounded-lg" />
        </div>
      </div>
    </footer>
  );
};

const NavLink = ({ link, text }) => {
  return (
    <li className="flex gap-3">
      <Link href={link} className="hover:underline underline-offset-4">
        {text}
      </Link>
    </li>
  );
};

export default Footer;
