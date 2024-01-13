import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const NewsCard = ({ image, title }) => {
  return (
    <div className="flex flex-col p-4 rounded-2xl bg-muted-foreground/20">
      <div className="overflow-hidden rounded-2xl">
        <Image src={image} height={400} width={400} className="w-full" />
      </div>
      <h3 className="p-4 text-center text-2xl text-primary">{title}</h3>
      <Button className="w-12 p-1 h-12 rounded-full self-center bg-secondary text-primary hover:bg-secondary/80">
        <ChevronsRight />
      </Button>
    </div>
  );
};

export default NewsCard;
