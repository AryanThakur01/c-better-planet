"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const CompanyBenefitDonation = () => {
  const [donation, setDonation] = useState("₹1000");
  return (
    <ul className="flex flex-wrap gap-4">
      <li className="flex items-center gap-2 border-2 rounded-full overflow-hidden w-36">
        <span className="px-2">Custom</span>
        <input
          className="w-16 h-10 rounded-full bg-transparent border-l-2 text-center"
          placeholder="Amount"
          value={donation}
          onChange={(e) => setDonation(e.target.value)}
        />
      </li>
      <li>
        <Button
          className={cn(
            "bg-transparent border-2 border-white rounded-full",
            donation === "₹500" && "bg-primary border-primary",
          )}
          onClick={() => setDonation("₹500")}
        >
          ₹500
        </Button>
      </li>
      <li>
        <Button
          className={cn(
            "bg-transparent border-2 border-white rounded-full",
            donation === "₹1000" && "bg-primary border-primary",
          )}
          onClick={() => setDonation("₹1000")}
        >
          ₹1000
        </Button>
      </li>
      <li>
        <Button
          className={cn(
            "bg-transparent border-2 border-white rounded-full",
            donation === "₹2000" && "bg-primary border-primary",
          )}
          onClick={() => setDonation("₹2000")}
        >
          ₹2000
        </Button>
      </li>
    </ul>
  );
};

export default CompanyBenefitDonation;
