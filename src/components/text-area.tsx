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
  const id_gen = id || (auto_id ? auto_id.replace(/\s/g, "").toLowerCase() : "");
  return (
    <div className={className}>
      {label !== false && <Label label={label || auto_id || ""} id={id_gen} />}
      <textarea
        {...rest}
        id={id_gen}
        name={name || id || auto_id || ""}
        placeholder={placeholder || "Enter " + auto_id || ""}
        autoComplete={autocomplete || id_gen}
        value={value}
        onBlur={(e) => onBlur && onBlur(e.target.value, id_gen)}
        onChange={(e) => onChange && onChange(e.target.value, id_gen)}
        className="form-text-area"
      />
      <ErrorHint alert={alert} error={error} />
    </div>
  );
};
