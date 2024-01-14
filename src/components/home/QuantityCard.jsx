import { UsersRound } from "lucide-react";
import React from "react";

const QuantityCard = ({ icon, title, quantity, symbol }) => {
  return (
    <div className="flex flex-col items-center w-36 gap-2 py-4 cursor-default">
      {icon}
      <h3 className="text-primary font-bold text-center">{title}</h3>
      <p className="font-bold">
        {symbol} {quantity.toLocaleString()}
      </p>
    </div>
  );
};

export default QuantityCard;
