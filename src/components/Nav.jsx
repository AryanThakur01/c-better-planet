import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Nav = () => {
  return (
    <nav className="h-16 flex items-center container sticky top-0 bg-white">
      <Link href="/">CleenHearts</Link>
      <ul className="container flex justify-end gap-4 text-primary">
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
        <Button className="flex items-center gap-2 bg-secondary hover:bg-secondary">
          <Heart fill="white" />
          <span>Donate now</span>
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
