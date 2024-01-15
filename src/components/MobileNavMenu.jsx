"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Heart } from "lucide-react";
import Link from "next/link";
import { AccordionContent } from "./ui/accordion";

const MobileNavMenu = ({ children }) => {
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
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">{children}</Button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="bg-primary border-r-primary text-white"
      >
        <SheetHeader>
          <SheetTitle className="my-4 text-white">Cleen Hearts</SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col gap-4 h-full">
          <li className="border-b border-b-muted-foreground">
            <SheetClose asChild>
              <Link href="/" className="block py-2">
                Home
              </Link>
            </SheetClose>
          </li>
          <li className="border-b border-b-muted-foreground">
            <SheetClose asChild>
              <Link href="/about" className="block py-2">
                About Us
              </Link>
            </SheetClose>
          </li>
          <li className="border-b border-b-muted-foreground">
            <SheetClose asChild>
              <Link href="/donate" className="block py-2">
                Donate Us
              </Link>
            </SheetClose>
          </li>
          <li className="border-b border-b-muted-foreground">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item" className="my-2 border-b-transparent">
                <AccordionTrigger className="hover:no-underline py-0">
                  Pages
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 px-2 my-2">
                  <Link
                    href="/pages/ourvolunteer"
                    className="py-2 w-full block text-start"
                  >
                    <SheetClose>Our Volunteer</SheetClose>
                  </Link>
                  <Link
                    href="/pages/becomeavolunteer"
                    className="py-2 w-full block text-start"
                  >
                    <SheetClose>Become A Volunteer</SheetClose>
                  </Link>
                  <Link
                    href="/pages/gallery"
                    className="py-2 w-full block text-start"
                  >
                    <SheetClose>Gallery</SheetClose>
                  </Link>
                  <Link
                    href="/pages/faq"
                    className="py-2 w-full block text-start"
                  >
                    <SheetClose>FAQs</SheetClose>
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li className="border-b border-b-muted-foreground">
            <SheetClose asChild>
              <Link href="/events" className="block py-2">
                Events
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link href="/contact" className="block py-2">
                Contact Us
              </Link>
            </SheetClose>
          </li>
          <li className="my-auto mb-16">
            <Button className="items-center gap-2 bg-secondary hover:bg-secondary w-full">
              <Heart fill="white" />
              <span>Donate now</span>
            </Button>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavMenu;
