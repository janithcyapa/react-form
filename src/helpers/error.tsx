import React from "react";
import { BiErrorAlt, BiErrorCircle } from "react-icons/bi";
import { ErrorHintProps } from "../types";

export const ErrorHint = ({ error, alert }: ErrorHintProps) => {
  return (
    <>
      {error ? (
        <div className="flex items-start justify-start form-error">
          <BiErrorAlt className="mr-1" />
          <p className=" ">{error}</p>
        </div>
      ) : (
        alert && (
          <div className="flex items-start justify-start form-hint">
            <BiErrorCircle className="mr-1" />
            <p className=" ">{alert}</p>
          </div>
        )
      )}
    </>
  );
};
