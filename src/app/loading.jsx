import { Loader2 } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="h-[80vh] w-screen flex justify-center items-center">
      <Loader2 className="animate-spin size-56" />
    </div>
  );
};

export default loading;
