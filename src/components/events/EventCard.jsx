import { cn } from "@/lib/utils";
import { Clock2, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventCard = ({ title, date, time, venue, image, paras }) => {
  return (
    <div className="rounded-2xl border shadow-sm group overflow-hidden flex flex-col">
      <div className="relative top-8 h-0 flex w-full justify-between z-10 cursor-pointer">
        {time && (
          <p className="py-2 px-8 bg-secondary-foreground text-white font-bold h-fit rounded-r-full flex gap-4">
            <Clock2 />
            <span>{time}</span>
          </p>
        )}
        {date && (
          <p className="py-2 px-8 bg-secondary text-primary font-bold h-fit rounded-l-full flex gap-4">
            {date}
          </p>
        )}
      </div>
      <div className="overflow-hidden bg-black">
        <Image
          src={image}
          className="group-hover:rotate-1 group-hover:scale-105 transition-all duration-500 cursor-pointer opacity-80"
        />
      </div>
      <div className="my-2 p-8 pb-0">
        <Link href="/events" className="hover:underline font-bold">
          <h2 className="text-primary text-2xl hover:text-secondary-foreground transition-all duration-500">
            {title}
          </h2>
        </Link>
        <hr className="my-4" />
        <div className="flex flex-col gap-2 mb-4">
          {paras && paras.map((p) => <p key={p}>{p}</p>)}
        </div>
      </div>
      {venue && (
        <div className="flex text-primary mt-auto p-8 pt-0">
          <div className={"flex flex-col gap-2"}>
            <h3 className="flex gap-2 font-bold">
              <MapPin className="text-secondary-foreground" />
              <span>Locations</span>
            </h3>
            <p>{venue}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCard;
