import React from "react";

const TopCard = ({ image }) => {
  return (
    <section
      className="container overflow-hidden relative z-10"
      style={{ background: `url(${image})no-repeat center center/cover` }}
    >
      <div className="absolute bg-primary h-96 w-full inset-0 z-[-1]" />
      <h1 className="text-4xl text-center my-32 text-white">About Us</h1>
    </section>
  );
};

export default TopCard;
