"use client";
import { assets } from "@/assets/assets";
import { Circle, Star } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Testimonials = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const departments = [
    {
      writer: "Cyber Jagriti",
      designation: "cyber crime prevention, awareness and reporting programmes",
      rating: 5,
      review: [
        "Cyber Jagriti means “cyber awakening” in Hindi, and reflects our vision of creating a cyber-savvy society that can protect itself from online threats and risks.",
        "We aims to empower people with the knowledge, skills, and resources to prevent and combat cyber crime",
        "Cyber Jagriti is a team of dedicated and qualified professionals, who have expertise and experience in the fields of cybersecurity, law, psychology, education, and social work. We also collaborate with various partners, such as government agencies, academic institutions, corporate entities, and other NGOs, to enhance our reach and impact.",
      ],
    },
    {
      writer: "FASH",
      designation: "focuses on Fighting Against Sexual Harassment",
      rating: 5,
      review: [
        "Sexual harassment is a pervasive and serious problem that affects millions of women and girls around the world. It can take various forms, such as physical, verbal, or online harassment, unwanted sexual advances, requests for sexual favors, or sexual assault. Sexual harassment can cause severe harm to individuals, such as physical injuries, psychological trauma, depression, anxiety, low self-esteem, and suicidal tendencies.",
        "FASH aims to empower women and girls with the knowledge, skills, and resources to fight against sexual harassment.",
        "FASH is a team of dedicated and qualified professionals, who have expertise and experience in the fields of law, psychology, education, and social work. We also collaborate with various partners, such as government agencies, academic institutions, corporate entities, and other NGOs, to enhance our reach and impact.",
      ],
    },
    {
      writer: "BadiSoch",
      designation:
        "focuses on inspiring students for better career and startup activities",
      rating: 5,
      review: [
        "BadiSoch means “big thinking” in Hindi, and reflects our vision of creating a society that nurtures the passions and potentials of young minds.",
        "Students are the future of our nation and the world. They have the power to shape the society and the environment with their ideas, skills, and innovations. However, many students face various challenges and barriers in pursuing their dreams, such as lack of information, guidance, opportunities, resources, and support.",
        "BadiSoch aims to empower students with the knowledge, skills, and resources to pursue their career and startup goals.",
        "BadiSoch is a team of dedicated and qualified professionals, who have expertise and experience in the fields of education, entrepreneurship, innovation, and social work. We also collaborate with various partners, such as government agencies, academic institutions, corporate entities, and other NGOs, to enhance our reach and impact.",
      ],
    },
    {
      writer: "LaunchPad",
      designation:
        "focuses on awareness and educational camps about menstrual cycle",
      rating: 5,
      review: [
        "LaunchPad means “a platform for a successful start” in English, and reflects our vision of creating a society that supports and empowers women and girls during their menstruation.",
        "Menstruation is a natural and healthy process that affects millions of women and girls around the world. However, many women and girls face various challenges and barriers in managing their menstrual health and hygiene, such as lack of awareness, access, affordability, and acceptance. Menstrual health and hygiene is not only a matter of personal well-being, but also a matter of social justice, gender equality, and human rights.",
        "LaunchPad is a team of dedicated and qualified professionals, who have expertise and experience in the fields of health, education, entrepreneurship, and social work. We also collaborate with various partners, such as government agencies, academic institutions, corporate entities, and other NGOs, to enhance our reach and impact.",
      ],
    },
    {
      writer: "Stop ‘UN’ Earth",
      designation: "focuses on environmental sustainability and conservation",
      rating: 5,
      review: [
        "Stop ‘UN’ Earth means “stop destruction” in Hindi, and reflects our vision of creating a society that respects and protects the planet and its resources.",
        "Environmental degradation is a major threat that affects millions of people and other living beings around the world. It can take various forms, such as deforestation, pollution, climate change, biodiversity loss, and resource depletion. Environmental degradation can cause serious harm to the planet and its inhabitants, such as health problems, food insecurity, natural disasters, social conflicts, and economic losses.",
        "Stop ‘UN’ Earth is a team of dedicated and qualified professionals, who have expertise and experience in the fields of environmental science, engineering, education, and social work. We also collaborate with various partners, such as government agencies, academic institutions, corporate entities, and other NGOs, to enhance our reach and impact.",
      ],
    },
  ];
  return (
    <section className="container py-20 bg-primary">
      <div className="border-2 border-white bg-background rounded-xl overflow-hidden">
        <div className="grid md:grid-cols-2 grid-cols-1 p-8 md:p-16 items-center gap-16 bg-[#3c2343] text-white">
          <div>
            <div className="flex font-bold items-center">
              <Circle size={16} className="relative fill-white" />
              <Circle size={16} className="relative right-2" />
              <span>Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-5xl my-4 font-bold">
              Departments Of Better Planet NGO
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
          <Carousel className="w-full p-8 md:p-16" setApi={setApi}>
            <CarouselContent className="-ml-1 mt-8">
              {departments.map((item, index) => (
                <CarouselItem key={index} className="px-1">
                  <div className="flex items-center gap-8 ">
                    <div className="pr-8">
                      <h3 className="text-primary font-bold text-2xl">
                        {item.writer}
                      </h3>
                      <p className="text-secondary-foreground font-bold mt-2">
                        {item.designation}
                      </p>
                    </div>
                    {/* <div className="flex gap-2"> */}
                    {/*   <Star */}
                    {/*     size={16} */}
                    {/*     className="fill-orange-700 stroke-orange-700" */}
                    {/*   /> */}
                    {/*   <Star */}
                    {/*     size={16} */}
                    {/*     className="fill-orange-700 stroke-orange-700" */}
                    {/*   /> */}
                    {/*   <Star */}
                    {/*     size={16} */}
                    {/*     className="fill-orange-700 stroke-orange-700" */}
                    {/*   /> */}
                    {/*   <Star */}
                    {/*     size={16} */}
                    {/*     className="fill-orange-700 stroke-orange-700" */}
                    {/*   /> */}
                    {/*   <Star */}
                    {/*     size={16} */}
                    {/*     className="fill-orange-700 stroke-orange-700" */}
                    {/*   /> */}
                    {/* </div> */}
                  </div>
                  {/* {JSON.stringify(item.review)} */}
                  <div className="my-8 pr-10 flex flex-col gap-2">
                    {item.review.map((rev) => (
                      <p className="text-xl text-muted-foreground" key={rev}>
                        {rev}
                      </p>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2">
              {/* page {current}/{testimonials.length} */}
              {Array.from({ length: departments.length }).map((_, i) => (
                <Button
                  className={cn(
                    current === i + 1 ? "bg-primary" : "bg-primary/40",
                    "h-2 w-2 p-1 rounded-full",
                  )}
                  key={"rev_but_" + i}
                  onClick={() => api.scrollTo(i)}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
