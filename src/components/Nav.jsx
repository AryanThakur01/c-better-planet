"use client";
import { ChevronDown, Heart, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import MobileNavMenu from "./MobileNavMenu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Nav = () => {
  const path = usePathname();
  const navContent = [
    { name: "Home", link: "/", subComps: [] },
    { name: "About Us", link: "/about", subComps: [] },
    // { name: "Donations", link: "/donations", subComps: [] },
    // {
    //   name: "Our Impact",
    //   link: "",
    //   icon: <ChevronDown size={16} />,
    //   subComps: [
    //     { name: "Cyber Awarness", link: "/pages/ourvolunteer" },
    //     { name: "Fight Sexual Harassment", link: "/pages/becomeavolunteer" },
    //     { name: "Inspire Students", link: "/pages/gallery" },
    //     { name: "Women Support", link: "/pages/faq" },
    //   ],
    // },
    {
      name: "Pages",
      link: "",
      icon: <ChevronDown size={16} />,
      subComps: [
        { name: "Our Volunteer", link: "/pages/ourvolunteer" },
        { name: "Become A Volunteer", link: "/pages/becomeavolunteer" },
        { name: "Gallery", link: "/pages/gallery" },
        { name: "FAQ", link: "/pages/faq" },
      ],
    },
    { name: "Events", link: "/events", subComps: [] },
    { name: "Contact", link: "/contact", subComps: [] },
  ];
  return (
    <nav className="h-20 flex justify-between items-center container sticky top-0 bg-white z-50">
      <Link href="/" className="hover:scale-105 transition-all">
        BetterPlanet
      </Link>
      <ul className="container hidden lg:flex justify-end gap-4 text-primary font-semibold">
        {navContent.map((item) => (
          <li key={item.name}>
            <div className="group">
              <Link
                href={item.link}
                className={cn(
                  "flex gap-1 items-center group-hover:text-secondary",
                  (item.link === path ||
                    (item.subComps[0] &&
                      path.match(
                        `/${item.subComps[0].link.split("/")[1]}/*`,
                      ))) &&
                    "text-secondary",
                )}
              >
                <span>{item.name}</span>
                <span className="group-hover:rotate-180 transition-all">
                  {item.icon}
                </span>
              </Link>
              {item.subComps?.length !== 0 && (
                <div className="h-0 w-0 relative top-0 hidden group-hover:block hover:block">
                  <div className="bg-white w-max h-fit p-2 flex flex-col gap-1 pt-6 text-sm font-semibold">
                    {item.subComps.map((sub) => (
                      <Link
                        href={sub.link}
                        className={cn(
                          "hover:bg-secondary flex gap-2 p-2",
                          sub.link === path && "bg-secondary",
                        )}
                        key={sub.name}
                      >
                        <span>{sub.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <Link
          href="https://www.instagram.com/cyberjagriti"
          className={cn(buttonVariants({ variant: "ghost" }), "w-10 p-2")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-2 stroke-primary"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </Link>
        <Button className="hidden md:flex items-center gap-2 bg-secondary hover:bg-secondary text-primary">
          <span className="bg-primary rounded-full p-1">
            <Heart fill="white" size={16} />
          </span>
          <span>Donate now</span>
        </Button>
        <div className="inline-block lg:hidden">
          <MobileNavMenu>
            <Menu />
          </MobileNavMenu>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
