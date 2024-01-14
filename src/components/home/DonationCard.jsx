import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ChevronsRight } from "lucide-react";

const DonationCard = ({ image, goal, raised, title }) => {
  return (
    <div className="border p-4 mx-2 rounded-2xl bg-muted shadow-lg my-4">
      <Image
        src={assets.HomeHero}
        height={500}
        width={500}
        className="h-60 rounded-2xl w-full"
      />
      <div className="relative bottom-8 bg-muted shadow w-4/5 mx-auto p-4 rounded-lg">
        <div className="h-2 w-full border-secondary-foreground border rounded-full mt-4">
          <div
            className="h-full bg-secondary-foreground rounded-r-full"
            style={{ width: (raised / goal) * 100 + "%" }}
          ></div>
          <p className="relative bottom-6 text-xs text-secondary-foreground">
            {((raised / goal) * 100).toFixed(0)}%
          </p>
        </div>
        <div className="flex justify-between text-sm">
          <p>Raised ${raised?.toLocaleString()}</p>
          <p>Goal ${goal?.toLocaleString()}</p>
        </div>
      </div>
      <a href="/" className="hover:underline">
        <h3 className="text-xl text-primary">{title}</h3>
      </a>
      <Button
        variant="outline"
        className="rounded-full border-primary h-12 flex gap-4 text-md mt-4"
      >
        <ChevronsRight className="bg-secondary rounded-full p-1 h-7 w-7" />
        <span>Donation details</span>
      </Button>
    </div>
  );
};

export default DonationCard;
