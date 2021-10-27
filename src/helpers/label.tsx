import React from "react";
import { LabelProps } from "../types";

export const Label = ({ label, id }: LabelProps) => {
  return (
    <label htmlFor={id} className="form-label">
      {label}
    </label>
  );
};
