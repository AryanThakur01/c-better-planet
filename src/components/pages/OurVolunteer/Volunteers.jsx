import React from "react";
import VolunteerCard from "./VolunteerCard";
import { assets } from "@/assets/assets";

const Volunteers = () => {
  const volunteerList = [
    {
      name: "Patricia E. Wall",
      designation: "Co-Founder & CEO",
      image: assets.Lifestyle,
      facebook: "",
      twitter: "",
      instagram: "",
    },
    {
      name: "Thomas C. Bale",
      designation: "Co-Founder & CEO",
      image: assets.Lifestyle,
      facebook: "",
      twitter: "",
      instagram: "",
    },
    {
      name: "Elyse A. Phillips",
      designation: "Co-Founder & CEO",
      image: assets.Lifestyle,
      facebook: "",
      twitter: "",
      instagram: "",
    },
    {
      name: "Ethel K. Daley",
      designation: "Co-Founder & CEO",
      image: assets.Lifestyle,
      facebook: "",
      twitter: "",
      instagram: "",
    },
    {
      name: "Alyssa P. Scribner",
      designation: "Co-Founder & CEO",
      image: assets.Lifestyle,
      facebook: "",
      twitter: "",
      instagram: "",
    },
    {
      name: "Velma P. Hawkins",
      designation: "Co-Founder & CEO",
      image: assets.Lifestyle,
      facebook: "",
      twitter: "",
      instagram: "",
    },
  ];
  return (
    <section className="grid md:grid-cols-3 container gap-4 my-20">
      {volunteerList.map((item) => (
        <VolunteerCard key={item.name} {...item} />
      ))}
    </section>
  );
};

export default Volunteers;
