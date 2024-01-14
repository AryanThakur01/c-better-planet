import { Heart, Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import MobileNavMenu from "./MobileNavMenu";

const Nav = () => {
  return (
    <nav className="h-16 flex justify-between items-center container sticky top-0 bg-white z-50">
      <Link href="/">CleenHearts</Link>
      <ul className="container hidden lg:flex justify-end gap-4 text-primary">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/donations">Donations</Link>
        </li>
        <li>
          <Link href="/pages">Pages</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
      <div className="flex gap-4">
        <Button variant={"outline"}>
          <ShoppingCart />
        </Button>
        <Button className="hidden md:flex items-center gap-2 bg-secondary hover:bg-secondary">
          <Heart fill="white" />
          <span>Donate now</span>
        </Button>
        <div className="inline-block md:hidden">
          <MobileNavMenu>
            <Menu />
          </MobileNavMenu>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
