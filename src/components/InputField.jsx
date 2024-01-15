import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Eye, EyeOff } from "lucide-react";

const InputField = ({
  labelName,
  type,
  uni,
  placeholder,
  rowWise,
  inputClass,
  labelClass,
  className,
  override,
  children,
  as,
}) => {
  const [passVisibility, setPassVisibility] = useState(false);
  const hidePass = () => {
    setPassVisibility(false);
  };

  const showPass = () => {
    setPassVisibility(true);
  };

  return (
    <div className={className}>
      <label
        className={cn(
          "text-primary col-span-1 flex items-center text-sm",
          labelClass,
        )}
        htmlFor={uni}
      >
        {labelName}
      </label>
      <div className={`flex items-center space-x-2 rounded-lg `}>
        <Field
          className={`p-4 px-8 w-[100%] border bg-white text-primary rounded ${inputClass} ${
            override ? "h-10" : ""
          }`}
          placeholder={placeholder}
          type={
            type !== "password" || type === undefined
              ? type
              : type === "password" && passVisibility
              ? "text"
              : "password"
          }
          id={uni}
          as={as}
          name={uni}
        >
          {override ? children : null}
        </Field>
        {type === "password" && passVisibility && (
          <Button onClick={() => hidePass()} className="p-1 cursor-pointer">
            <EyeOff />
          </Button>
        )}
        {type === "password" && !passVisibility && (
          <Button onClick={() => showPass()} className="p-1 cursor-pointer">
            <Eye />
          </Button>
        )}
      </div>
      <div className="h-6 px-8">
        <ErrorMessage
          name={uni}
          component={(props) => (
            <div className="text-red-500">{props.children}</div>
          )}
        />
      </div>
    </div>
  );
};

export default InputField;
