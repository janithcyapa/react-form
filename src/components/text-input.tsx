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
  const id_gen = id || (auto_id ? auto_id.replace(/\s/g, "").toLowerCase() : "");
  return (
    <div className={className}>
      {label !== false && <Label label={label || auto_id || ""} id={id_gen} />}
      <input
        className="form-input"
        disabled={disabled}
        {...rest}
        id={id_gen}
        name={name || id_gen}
        placeholder={placeholder || "Enter " + auto_id || ""}
        autoComplete={autocomplete || id_gen}
        type={type ? type : "text"}
        value={value}
        onBlur={(e) => onBlur && onBlur(e.target.value, id_gen)}
        onChange={(e) => onChange && onChange(e.target.value, id_gen)}
      />
      <ErrorHint alert={alert} error={error} />
    </div>
  );
};
