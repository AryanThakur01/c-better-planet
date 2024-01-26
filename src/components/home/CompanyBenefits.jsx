import { assets } from "@/assets/assets";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { Check, ChevronsRight } from "lucide-react";
import CompanyBenefitDonation from "./CompanyBenefitDonation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const CompanyBenefits = () => {
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 gap-8 container mt-48 mb-20">
      <div
        className="border rounded-2xl overflow-hidden"
        style={{
          background: `url(${assets.TaxBenefit.src})no-repeat center center/cover`,
        }}
      >
        <div className="bg-black p-8 min-h-60 text-white bg-opacity-75 h-full flex flex-col">
          <h2 className="text-3xl">Connect With Us</h2>
          <p className="py-4">
            Better Planet Society united students, locals, influencers for
            impactful community drives, expanding reach and awareness.
          </p>
          <ul className="flex justify-between flex-wrap">
            <li className="flex gap-2">
              <Check />
              <span>Donate Money</span>
            </li>
            <li className="flex gap-2">
              <Check />
              <span>Become a Volunteer</span>
            </li>
            <li className="flex gap-2">
              <Check />
              <span>Become an Influencer</span>
            </li>
          </ul>
          <hr className="border-none my-4" />
          <Link
            href="/about"
            className={cn(
              buttonVariants({ variant: "default" }),
              "mt-auto rounded-full h-12 border border-white bg-transparent hover:bg-white hover:text-primary gap-2 flex w-36",
            )}
          >
            <ChevronsRight className="bg-secondary rounded-full p-1 h-7 w-7 text-primary" />
            <span>Read More</span>
          </Link>
        </div>
      </div>
      <div
        className="border rounded-2xl overflow-hidden flex flex-col"
        style={{
          background: `url(${assets.DonateNow.src})no-repeat center center/cover`,
        }}
      >
        <div className="bg-black p-8 min-h-60 text-white bg-opacity-75 h-full">
          <h2 className="text-3xl">How we measure impact?</h2>
          <p className="py-4">
            Better Planet Society measures impact through stories, stats, and
            partner feedback for accountability and improvement.
          </p>
          <CompanyBenefitDonation />
          <hr className="border-none my-4" />
          <Button className="mt-auto rounded-full h-12 border border-white bg-transparent hover:bg-white hover:text-primary gap-2 flex">
            <ChevronsRight className="bg-secondary rounded-full p-1 h-7 w-7 text-primary" />
            <span>Donate Now</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CompanyBenefits;
