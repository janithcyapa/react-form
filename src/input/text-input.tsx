import React from "react";
import { ErrorHint } from "../helpers/error";
import { Label } from "../helpers/label";
import { FormInputProps } from "../types";

export const Input = ({
  auto_id,
  id,
  name,
  placeholder,
  disabled,
  autocomplete,
  label,
  className,
  value,
  onChange,
  onBlur,
  type,
  alert,
  error,
  ...rest
}: FormInputProps) => {
  const id_gen = auto_id ? auto_id.replace(/\s/g, "").toLowerCase() : null;
  return (
    <div className={className}>
      {label !== false && <Label label={label || auto_id || ""} id={id_gen || id || ""} />}
      <input
        className="form-input"
        disabled={disabled}
        {...rest}
        id={id || id_gen || ""}
        name={name || auto_id || id || ""}
        placeholder={placeholder || "Enter " + auto_id || ""}
        autoComplete={autocomplete || id_gen || id || ""}
        type={type ? type : "text"}
        value={value}
        onBlur={(e) => onBlur && onBlur(e.target.value, id || id_gen || "")}
        onChange={(e) => onChange && onChange(e.target.value, id || id_gen || "")}
      />
      <ErrorHint alert={alert} error={error} />
    </div>
  );
};
