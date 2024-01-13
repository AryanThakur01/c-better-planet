import { assets } from "@/assets/assets";
import { Circle, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      writer: "John Doe",
      designation: "Marketing Manager",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cum sunt cumque dignissimos expedita, omnis recusandae labore maiores commodi atque. ",
    },
    {
      writer: "John Doe",
      designation: "Marketing Manager",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cum sunt cumque dignissimos expedita, omnis recusandae labore maiores commodi atque. ",
    },
    {
      writer: "John Doe",
      designation: "Marketing Manager",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cum sunt cumque dignissimos expedita, omnis recusandae labore maiores commodi atque. ",
    },
    {
      writer: "John Doe",
      designation: "Marketing Manager",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cum sunt cumque dignissimos expedita, omnis recusandae labore maiores commodi atque. ",
    },
  ];
  return (
    <section className="container bg-card py-20">
      <div className="border border-black rounded-2xl p-8 md:p-16">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-16">
          <div>
            <div className="flex font-bold items-center text-primary/80">
              <Circle size={16} className="relative fill-primary" />
              <Circle size={16} className="relative right-2" />
              <span>Testimonials</span>
            </div>
            <h2 className="text-4xl my-4">
              What They’re Talking About Clean Heart
            </h2>
          </div>
          <div className="flex justify-center">
            <Image src={assets.HomeHero} className="rounded-full h-40 w-max" />
          </div>
        </div>
        <div>
          <Carousel className="w-full">
            <CarouselContent className="-ml-1 mt-8">
              {testimonials.map((item, index) => (
                <CarouselItem key={index} className="pl-1">
                  <div className="flex items-center gap-8 ">
                    <div className="border-r pr-8">
                      <h3 className="text-primary font-bold text-2xl">
                        {item.writer}
                      </h3>
                      <p className="text-secondary-foreground font-bold mt-2">
                        {item.designation}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Star
                        size={16}
                        className="fill-secondary stroke-secondary"
                      />
                      <Star
                        size={16}
                        className="fill-secondary stroke-secondary"
                      />
                      <Star
                        size={16}
                        className="fill-secondary stroke-secondary"
                      />
                      <Star
                        size={16}
                        className="fill-secondary stroke-secondary"
                      />
                      <Star
                        size={16}
                        className="fill-secondary stroke-secondary"
                      />
                    </div>
                  </div>
                  <p className="my-8 text-2xl text-muted-foreground">
                    {item.review}
                  </p>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
