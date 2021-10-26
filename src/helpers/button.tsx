import React from "react";
import { CgSpinnerTwo as Spinner } from "react-icons/cg";
import { ButtonProps } from "../types";

export function Submit({ button_type = "flat", label, className, loading, ...rest }: ButtonProps) {
  return (
    <>
      <button
        {...rest}
        type="submit"
        disabled={rest?.disabled && rest?.disabled === true ? rest?.disabled : loading ? loading : false}
        className={`${
          button_type && button_type === "flat"
            ? "bg-primary text-white px-6 py-2.5 font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
            : "border-primary border-2 bg-white text-primary font-semibold px-6 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
        } ${className}`}
      >
        {loading && loading === true ? (
          <Spinner className={`animate-spin ${button_type && button_type === "flat" ? "text-white" : "text-primary"} text-xl mx-auto`} />
        ) : (
          <> {label}</>
        )}
      </button>
    </>
  );
}

export function Reset({ label, className, loading, ...rest }: ButtonProps) {
  return (
    <>
      <button
        {...rest}
        disabled={rest?.disabled && rest?.disabled === true ? rest?.disabled : loading ? loading : false}
        className={` text-primary font-light px-6 py-1 text-sm  transition duration-300 ease-in-out transform hover:scale-105 hover:underline
         ${className}`}
      >
        {label}
      </button>
    </>
  );
}
