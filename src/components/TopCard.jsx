import React from "react";

const TopCard = ({ title, image }) => {
  return (
    <section
      className="container overflow-hidden relative z-10 border-[0.8rem] border-white rounded-3xl"
      style={{ background: `url(${image.src})no-repeat center center/cover` }}
    >
      <div className="absolute bg-primary w-full inset-0 z-[-1] opacity-80" />
      <h1 className="text-4xl text-center my-56 text-white">{title}</h1>
    </section>
  );
};

export default TopCard;
