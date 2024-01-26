import { assets } from "@/assets/assets";
import { Circle, HelpingHand, Stethoscope } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const WhoWeAre = () => {
  return (
    <>
      <section className="container grid grid-cols-1 md:grid-cols-2 pb-20 items-center gap-8 bg-[#efede6] py-16">
        <div className="md:order-1 order-2">
          <div className="flex font-bold items-center text-secondary-foreground">
            <Circle size={16} className="relative fill-secondary-foreground" />
            <Circle size={16} className="relative right-2" />
            <span>WHO ARE WE</span>
          </div>
          <h2 className="my-4 text-3xl md:text-5xl font-bold">
            More to know about us
          </h2>
          <p className="text-muted-foreground my-8">
            Established in 2016, the eProduct Foundation is a leading
            organization in the field of cybersecurity. We have a team of 200
            qualified consultants who have delivered free consultations to 2000
            people across 500 camps. Our foundation is driven by a common vision
            among cyber experts who identified the critical need to address and
            counter the increasing challenges in the digital domain.
          </p>
        </div>
        <div className="order-1">
          <Image
            src={assets.MoreAbout}
            height={1000}
            width={1000}
            className="w-full rounded-xl"
          />
        </div>
      </section>

      <section className="container grid grid-cols-1 md:grid-cols-2 pb-20 items-center gap-8 bg-[#efede6] py-16">
        <div className="order-1">
          <div className="flex font-bold items-center text-secondary-foreground">
            <Circle size={16} className="relative fill-secondary-foreground" />
            <Circle size={16} className="relative right-2" />
            <span>LONG TERM PLANS</span>
          </div>
          <h2 className="my-4 text-3xl md:text-5xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground my-8">
            Our mission is to prevent cyber crimes, create awareness, fight
            against sexual harassment, inspire students for better careers,
            educate about menstrual cycle and hygiene, preserve the natural
            habitat, and recycle and reuse. We collaborate with governments,
            corporations, communities, and individuals to implement effective
            solutions that address the various challenges faced by our society
            and environment. We empower people to live with dignity, security,
            and happiness on a better planet.
          </p>
          <div className="my-12 flex gap-4 flex-wrap">
            <Button className="flex gap-2 h-12">
              <span>Become A Volunteer</span>
              <HelpingHand className="bg-secondary rounded h-8 w-8 p-1" />
            </Button>
            <Button variant="outline" className="flex gap-2 h-12">
              <span>Medical And Health</span>
              <Stethoscope className="bg-primary text-white rounded h-8 w-8 p-1" />
            </Button>
          </div>
        </div>
        <div className="order-0">
          <Image
            src={assets.OurMission}
            height={1000}
            width={1000}
            className="w-full rounded-xl"
          />
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
