import { assets } from "@/assets/assets";
import { Circle } from "lucide-react";
import Image from "next/image";
import React from "react";

const Story = () => {
  return (
    <section className="container bg-card py-20 mt-20">
      <div className="flex font-bold items-center text-white w-fit mx-auto mb-4">
        <Circle size={16} className="relative fill-white" />
        <Circle size={16} className="relative right-2" />
        <span>BETTER PLANET STORY</span>
      </div>
      <h1 className="text-3xl md:text-5xl text-center mb-16 max-w-[30rem] mx-auto font-bold text-white">
        A Journey Through Better Planet Story
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <Image
          src={assets.OurMission}
          alt="story"
          className="rounded-2xl h-full shadow-xl"
        />
        <div className="p-8 shadow-inner shadow-gray-500 text-muted-foreground rounded-2xl bg-white">
          <h2 className="text-primary text-xl mb-8 font-bold">
            Our Mission And Vission
          </h2>
          <p className="my-4 text-xl">
            Our mission is to prevent cyber crimes, create awareness, fight
            against sexual harassment, inspire students for better careers,
            educate about menstrual cycle and hygiene, preserve the natural
            habitat, and recycle and reuse. We collaborate with governments,
            corporations, communities, and individuals to implement effective
            solutions that address the various challenges faced by our society
            and environment. We empower people to live with dignity, security,
            and happiness on a better planet.
          </p>
          {/* <div className="flex gap-8 mt-16"> */}
          {/*   <Image */}
          {/*     src={assets.HomeHero} */}
          {/*     alt="Owner" */}
          {/*     className="h-20 w-20 rounded-full" */}
          {/*   /> */}
          {/*   <div className="flex flex-col justify-center"> */}
          {/*     <h3 className="text-primary font-bold">Robert Joe Kerry</h3> */}
          {/*     <p className="text-secondary-foreground">Founder</p> */}
          {/*   </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Story;
