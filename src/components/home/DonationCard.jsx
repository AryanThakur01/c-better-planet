import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ChevronsRight } from "lucide-react";

const DonationCard = ({ image, goal, raised, title, detail }) => {
  return (
    <div className="border p-4 mx-2 rounded-2xl bg-muted shadow-lg my-4 group h-[96%] flex flex-col cursor-default">
      <div className="rounded-2xl overflow-hidden bg-primary">
        <Image
          src={image}
          height={500}
          width={500}
          className="h-60 w-full group-hover:scale-105 group-hover:opacity-50 transition-all duration-500"
        />
      </div>
      <div className="relative bottom-8 bg-muted shadow w-4/5 mx-auto p-4 rounded-lg">
        {/* <h2 className="text-primary font-bold md:text-2xl text-lg">{title}</h2> */}
        <div className="h-2 w-full border-secondary-foreground border rounded-full mt-4">
          <div
            className="h-full bg-secondary-foreground rounded-r-full"
            style={{ width: (raised / goal) * 100 + "%" }}
          ></div>
          <p className="relative bottom-6 text-xs text-secondary-foreground">
            {((raised / goal) * 100).toFixed(0)}% Target Accomplished
          </p>
        </div>
        {/* <div className="flex justify-between text-sm"> */}
        {/*   <p>Raised ${raised?.toLocaleString()}</p> */}
        {/*   <p>Goal ${goal?.toLocaleString()}</p> */}
        {/* </div> */}
      </div>
      <a href="/" className="hover:underline">
        <h3 className="text-xl text-primary font-bold">{title}</h3>
      </a>
      <hr className="border my-2" />
      <p>{detail}</p>
      {/* <Button */}
      {/*   variant="outline" */}
      {/*   className="rounded-full border-primary h-12 flex gap-4 text-md mt-auto w-52" */}
      {/* > */}
      {/*   <ChevronsRight className="bg-secondary rounded-full p-1 h-7 w-7" /> */}
      {/*   <span>Donation details</span> */}
      {/* </Button> */}
    </div>
  );
};

export default DonationCard;
