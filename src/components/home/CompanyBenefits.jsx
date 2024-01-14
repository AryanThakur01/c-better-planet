import { assets } from "@/assets/assets";
import React from "react";
import { Button } from "../ui/button";
import { Check, ChevronsRight } from "lucide-react";
import CompanyBenefitDonation from "./CompanyBenefitDonation";

const CompanyBenefits = () => {
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 gap-8 container mt-48 mb-20">
      <div
        className="border rounded-2xl overflow-hidden"
        style={{
          background: `url(${assets.HomeHero.src})no-repeat center center/cover`,
        }}
      >
        <div className="bg-black p-8 min-h-60 text-white bg-opacity-60 h-full">
          <h2 className="text-3xl">Make The Most Out Of Tax Time</h2>
          <p className="py-4">
            We help companies develop powerful corporate social responsibility,
            grantmaking, and employee engagement strategies.
          </p>
          <ul className="flex justify-between flex-wrap">
            <li className="flex gap-2">
              <Check />
              <span>Donate Money</span>
            </li>
            <li className="flex gap-2">
              <Check />
              <span>Donate Money</span>
            </li>
            <li className="flex gap-2">
              <Check />
              <span>Donate Money</span>
            </li>
          </ul>
          <Button className="my-4 mt-8 rounded-full h-12 border border-white bg-transparent hover:bg-white hover:text-primary gap-2 flex">
            <ChevronsRight className="bg-secondary rounded-full p-1 h-7 w-7" />
            <span>Read More</span>
          </Button>
        </div>
      </div>
      <div
        className="border rounded-2xl overflow-hidden"
        style={{
          background: `url(${assets.HomeHero.src})no-repeat center center/cover`,
        }}
      >
        <div className="bg-black p-8 min-h-60 text-white bg-opacity-60 h-full">
          <h2 className="text-3xl">Make A Donate Now</h2>
          <p className="py-4">
            We help companies develop powerful corporate social responsibility,
            grantmaking, and employee
          </p>
          <CompanyBenefitDonation />
          <Button className="my-4 mt-8 rounded-full h-12 border border-white bg-transparent hover:bg-white hover:text-primary gap-2 flex">
            <ChevronsRight className="bg-secondary rounded-full p-1 h-7 w-7" />
            <span>Read More</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CompanyBenefits;
