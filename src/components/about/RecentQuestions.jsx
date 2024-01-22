import { assets } from "@/assets/assets";
import { Circle } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const RecentQuestions = ({ parentClass }) => {
  const contentList = [
    {
      title: "This is title?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, accusantium!",
    },
    {
      title: "This is title?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, accusantium!",
    },
    {
      title: "This is title?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, accusantium!",
    },
  ];
  return (
    <section
      className={cn(
        parentClass ? parentClass : "bg-[#F0EEE7]",
        "container py-8 grid grid-cols-1 md:grid-cols-2 gap-16",
      )}
    >
      <Image src={assets.HomeHero} alt="" className="rounded-xl h-full" />
      <div>
        <div className="flex font-bold items-center text-secondary-foreground">
          <Circle size={16} className="relative fill-secondary-foreground" />
          <Circle
            size={16}
            className="relative right-2 stroke-secondary-foreground"
          />
          <span>Recently asked questions</span>
        </div>
        <h2 className="text-5xl text-primary my-4 font-bold">
          People Are Frequently Asking Some Questions
        </h2>
        <p className="text-muted-foreground my-4 text-lg">
          We help companies develop powerful corporate social responsibility,
          grantmaking, and employee engagement strategies.
        </p>
        <FAQs contentList={contentList} />
      </div>
    </section>
  );
};

const FAQs = ({ contentList }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {contentList.map((item, index) => (
        <AccordionItem
          value={"item-" + index}
          key={item.title}
          className="bg-white px-4 rounded-lg my-2"
        >
          <AccordionTrigger className="text-xl px-1 hover:no-underline">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-lg">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default RecentQuestions;
