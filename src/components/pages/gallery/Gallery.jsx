import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Gallery = () => {
  const imageList = [
    assets.TaxBenefit,
    assets.Helping,
    assets.DonateNow,
    assets.Helping,
    assets.DonateNow,
    assets.Helping,
  ];
  return (
    <section className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-20 container gap-8">
      {imageList.map((img) => (
        <div
          key={img.src}
          className="h-96 overflow-hidden flex items-center rounded-xl group"
        >
          <Image
            src={img}
            alt="Gallery Image"
            className="min-w-full min-h-full group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      ))}
    </section>
  );
};

export default Gallery;
