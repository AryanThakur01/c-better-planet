import Image from "next/image";
import React from "react";

const VolunteerCard = ({ image, name, designation }) => {
  return (
    <div className="group">
      {/* <div className="h-0 relative z-10 group top-10 flex justify-end"> */}
      {/*   <div className="h-fit flex justify-end p-2 px-8 w-fit bg-orange-200"> */}
      {/*     <span className="h-10 w-10 rounded-full overflow-hidden"> */}
      {/*       <Share2 className="bg-gray-200 h-10 w-10 fill-primary stroke-primary p-2 hover:bg-secondary cursor-pointer" /> */}
      {/*     </span> */}
      {/*   </div> */}
      {/* </div> */}
      <Image src={image} alt={name} className="rounded-2xl" />
      <div className="w-4/5 mx-auto text-center p-4 bg-gray-200 text-primary rounded-xl relative bottom-8 group-hover:bg-secondary transition-all duration-300">
        <h2 className="text-primary font-bold text-xl">{name}</h2>
        <p className="text-sm text-secondary-foreground font-semibold">
          {designation}
        </p>
      </div>
    </div>
  );
};

export default VolunteerCard;
