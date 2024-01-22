import { Heart, Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import MobileNavMenu from "./MobileNavMenu";

const Nav = () => {
  const navContent = [
    { name: "Home", link: "/", subComps: [] },
    { name: "About Us", link: "/about", subComps: [] },
    { name: "Donations", link: "/donations", subComps: [] },
    {
      name: "Pages",
      link: "",
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
      <Link href="/">CleenHearts</Link>
      <ul className="container hidden lg:flex justify-end gap-4 text-primary font-semibold">
        {navContent.map((item) => (
          <li key={item.name}>
            <div className="group">
              <Link href={item.link}>{item.name}</Link>
              {item.subComps?.length !== 0 && (
                <div className="h-0 w-0 relative top-0 hidden group-hover:block hover:block">
                  <div className="bg-white w-max h-fit p-2 flex flex-col gap-1 pt-6 text-sm font-semibold">
                    {item.subComps.map((sub) => (
                      <Link
                        href={sub.link}
                        className="hover:bg-secondary flex gap-2 p-2"
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
        <Button variant={"outline"}>
          <ShoppingCart />
        </Button>
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
