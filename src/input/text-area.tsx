import React from "react";
import { ErrorHint } from "../helpers/error";
import { Label } from "../helpers/label";
import FormInputProps from "../types";

export const TextArea = ({
  auto_id,
  id,
  name,
  placeholder,
  autocomplete,
  label,
  className,
  value,
  onChange,
  onBlur,
  alert,
  error,
  ...rest
}: FormInputProps) => {
  const id_gen = auto_id ? auto_id.replace(/\s/g, "").toLowerCase() : null;
  return (
    <div className={className}>
      {label !== false && <Label label={label || auto_id || ""} id={id_gen || id || ""} />}
      <textarea
        {...rest}
        id={id || id_gen || ""}
        name={name || auto_id || id || ""}
        placeholder={placeholder || "Enter " + auto_id || ""}
        autoComplete={autocomplete || id_gen || id || ""}
        value={value}
        onBlur={(e) => onBlur && onBlur(e.target.value, id || id_gen || "")}
        onChange={(e) => onChange && onChange(e.target.value, id || id_gen || "")}
        className="bg-gray-100 w-full px-2 py-2  rounded-md text-base text-gray-800  border-2 border-gray-200 focus:border-blue-600 focus:bg-blue-50 outline-none"
      />
      <ErrorHint alert={alert} error={error} />
    </div>
  );
};
