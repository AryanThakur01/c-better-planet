import { Circle } from "lucide-react";
import React from "react";

const UpcomingEvents = () => {
  return (
    <section className="container">
      <div className="flex font-bold items-center text-primary/80 w-fit mx-auto">
        <Circle size={16} className="relative fill-primary" />
        <Circle size={16} className="relative right-2" />
        <span>Worldwide non profit charity</span>
      </div>
      <h2 className="text-center text-4xl font-bold text-primary my-2">
        See Upcoming Events
      </h2>
    </section>
  );
};

export default UpcomingEvents;
