import React from "react";
import { LabelProps } from "../types";

export const Label = ({ label, id }: LabelProps) => {
  return (
    <label htmlFor={id} className="text-gray-400 m-2">
      {label}
    </label>
  );
};
