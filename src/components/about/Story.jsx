import { assets } from "@/assets/assets";
import { Circle } from "lucide-react";
import Image from "next/image";
import React from "react";

const Story = () => {
  return (
    <section className="container my-20">
      <div className="flex font-bold items-center text-secondary-foreground w-fit mx-auto mb-4 mt-20">
        <Circle size={16} className="relative fill-secondary-foreground" />
        <Circle
          size={16}
          className="relative right-2 stroke-secondary-foreground"
        />
        <span>WHO ARE WE</span>
      </div>
      <h1 className="text-4xl text-center mb-16 max-w-96 mx-auto">
        A Journey Through clean heart Story
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <Image
          src={assets.HomeHero}
          alt="story"
          className="rounded-2xl h-full"
        />
        <div className="p-8 shadow text-muted-foreground rounded-2xl">
          <h2 className="text-primary text-xl mb-8">Our Mission And Vission</h2>
          <p className="my-4">
            Nam ultrices odio a felis lobortis convallis. In ex nunc, ornare non
            condimentum et, egestas vel massa. Nullam hendrerit felis quis
            pellentesque porttitor. Aenean lobortis bibendum turpis et auctor.
            Nam iaculis, lectus vulputate cursus interdum
          </p>
          <p>
            Nam ultrices odio a felis lobortis convallis. In ex nunc, ornare non
            condimentum et, egestas vel massa. Nullam hendrerit
          </p>
          <div className="flex gap-8 mt-16">
            <Image
              src={assets.HomeHero}
              alt="Owner"
              className="h-20 w-20 rounded-full"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-primary">Robert Joe Kerry</h3>
              <p className="text-secondary-foreground">Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
