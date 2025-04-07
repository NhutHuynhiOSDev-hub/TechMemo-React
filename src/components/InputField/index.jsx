import React, { useState } from "react";
import { RiUserLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";
import { RiEyeOffLine } from "react-icons/ri";

const InputField = ({ name, type, id, value, placeHolder, required }) => {
  const [showPass, setShowPass] = useState(true);
  return (
    <div className="relative w-[100%]">
      <input
        id={id}
        name={name}
        type={type === "password" ? (showPass ? "text" : "password") : type}
        value={value}
        required={required}
        placeholder={placeHolder}
        className={
          "w-[100%] rounded-md p-4 bg-zinc-200 pl-12 border border-none focus:bg-transparent placeholder:text-black"
        }
        // onChange={(e) => handleInputChange(item?.name, e.target.value)}
      />
      <RiUserLine className="absolute left-4 top-1/2 -translate-y-1/2" />
      {type === "password" &&
        (showPass ? (
          <RiEyeLine
            className="absolute top-1/2 -translate-y-1/2 left-auto right-4 cursor-pointer"
            onClick={() => {
              setShowPass((currentVal) => !currentVal);
            }}
          />
        ) : (
          <RiEyeOffLine
            className="absolute top-1/2 -translate-y-1/2 left-auto right-4 cursor-pointer"
            onClick={() => {
              setShowPass((currentVal) => !currentVal);
            }}
          />
        ))}
    </div>
  );
};

export default InputField;
