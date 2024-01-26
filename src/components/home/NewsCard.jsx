import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const NewsCard = ({ image, title, date }) => {
  return (
    <div className="flex flex-col p-4 rounded-2xl bg-muted-foreground/20 group h-full">
      {/* <div className="h-0 z-50 relative top-10 left-4 w-fit"> */}
      {/*   <p className="bg-white w-14 h-14 text-lg rounded-full leading-5 flex items-center text-center font-bold group-hover:bg-secondary transition-all duration-500"> */}
      {/*     {date} */}
      {/*   </p> */}
      {/* </div> */}
      <div className="overflow-hidden rounded-2xl h-68">
        <Image
          src={image}
          height={400}
          width={400}
          className="w-full group-hover:scale-110 transition-all duration-500"
        />
      </div>
      <Link
        href="/"
        className="hover:underline hover:underline-offset-4 hover:text-secondary-foreground text-primary transition-all"
      >
        <h3 className="p-4 text-center text-2xl">{title}</h3>
      </Link>
      {/* <Button className="w-12 p-1 h-12 rounded-full self-center bg-secondary text-primary hover:bg-secondary/80 mt-auto"> */}
      {/*   <ChevronsRight /> */}
      {/* </Button> */}
    </div>
  );
};

export default NewsCard;
