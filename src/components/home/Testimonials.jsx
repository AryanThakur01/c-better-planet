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
    <section className="container py-20 bg-[#3c2343]">
      <div className="border-2 border-white bg-background rounded-xl overflow-hidden">
        <div className="grid md:grid-cols-2 grid-cols-1 p-8 md:p-16 items-center gap-16 bg-[#3c2343] text-white">
          <div>
            <div className="flex font-bold items-center">
              <Circle size={16} className="relative fill-white" />
              <Circle size={16} className="relative right-2" />
              <span>Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-5xl my-4 font-bold">
              What They’re Talking About Clean Heart
            </h2>
          </div>
          <div
            className="flex justify-center w-full h-full rounded-full"
            style={{
              background: `url(${assets.Lifestyle.src})no-repeat center center/cover`,
            }}
          >
            {/* <Image src={} className="rounded-full h-40 w-max" /> */}
          </div>
        </div>
        <div>
          <Carousel className="w-full m-8 md:m-16">
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
                        className="fill-orange-700 stroke-orange-700"
                      />
                      <Star
                        size={16}
                        className="fill-orange-700 stroke-orange-700"
                      />
                      <Star
                        size={16}
                        className="fill-orange-700 stroke-orange-700"
                      />
                      <Star
                        size={16}
                        className="fill-orange-700 stroke-orange-700"
                      />
                      <Star
                        size={16}
                        className="fill-orange-700 stroke-orange-700"
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
