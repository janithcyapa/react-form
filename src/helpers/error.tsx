import React from "react";
import { BiErrorAlt, BiErrorCircle } from "react-icons/bi";
import { ErrorHintProps } from "../types";

export const ErrorHint = ({ error, alert }: ErrorHintProps) => {
  return (
    <>
      {error ? (
        <div className="flex items-start justify-start mx-4 text-sm text-red-400 italic mt-0.5">
          <BiErrorAlt className="mr-1 text-xl" />
          <p className=" ">{error}</p>
        </div>
      ) : (
        alert && (
          <div className="flex items-start justify-start mx-4 text-sm text-gray-400 italic mt-0.5">
            <BiErrorCircle className="mr-1 text-xl" />
            <p className=" ">{alert}</p>
          </div>
        )
      )}
    </>
  );
};
