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
import { Heart } from "lucide-react";
import Link from "next/link";

const MobileNavMenu = ({ children }) => {
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
            <SheetClose asChild>
              <Link href="/pages" className="block py-2">
                Pages
              </Link>
            </SheetClose>
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
