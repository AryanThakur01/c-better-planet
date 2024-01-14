import { Clock2, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventCard = ({ title, date, time, organizer, venue, image }) => {
  return (
    <div className="rounded-2xl overflow-hidden border shadow-sm group">
      <div className="relative top-16 h-0 flex w-full justify-between z-10 cursor-pointer">
        <p className="py-2 px-8 bg-secondary-foreground text-white font-bold h-fit rounded-r-full flex gap-4">
          <Clock2 />
          <span>{time}</span>
        </p>
        <p className="py-2 px-8 bg-secondary text-primary font-bold h-fit rounded-l-full flex gap-4">
          {date}
        </p>
      </div>
      <div className="overflow-hidden">
        <Image
          src={image}
          className="group-hover:rotate-1 group-hover:scale-105 transition-all duration-500 cursor-pointer"
        />
      </div>
      <div className="m-8">
        <Link href="/events" className="hover:underline">
          <h2 className="text-primary text-2xl hover:text-secondary-foreground transition-all duration-500">
            {title}
          </h2>
        </Link>
        <div className="my-8 flex text-primary">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Organizer</h3>
            <p>{organizer}</p>
          </div>
          <div className="flex flex-col gap-2 ml-8 pl-8 border-l">
            <h3 className="flex gap-2 font-bold">
              <MapPin className="text-secondary-foreground" />
              <span>Venue</span>
            </h3>
            <p>{venue}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
