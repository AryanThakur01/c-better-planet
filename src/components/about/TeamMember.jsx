import React from "react";

const TeamMember = ({ name, desiganation, image }) => {
  return (
    <div className="border-2 border-secondary-foreground mx-8 rounded-t-full my-8 w-80">
      <div
        className="h-72 rounded-t-full overflow-hidden group flex flex-col relative top-8 left-8"
        style={{
          background: `url(${image.src}) no-repeat center center/cover`,
        }}
      >
        <div className="overflow-hidden rounded-t-full text-center w-full bg-primary/50 h-0 flex flex-col group-hover:h-full transition-all duration-300 mt-auto">
          <h3 className="text-2xl text-white mt-auto">{name}</h3>
          <p className="text-lg text-secondary mb-4">{desiganation}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
