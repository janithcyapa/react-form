import React from "react";
import { ErrorHint } from "../helpers/error";
import { Label } from "../helpers/label";
import FormInputProps from "../types";

export const Select = ({
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
  def_option,
  options,
  ...rest
}: FormInputProps) => {
  const id_gen = id || (auto_id ? auto_id.replace(/\s/g, "").toLowerCase() : "");
  return (
    <div className={className}>
      {label !== false && <Label label={label || auto_id || ""} id={id_gen} />}
      <select
        {...rest}
        id={id_gen}
        name={name || id_gen}
        placeholder={placeholder || "Enter " + auto_id || ""}
        autoComplete={autocomplete || id_gen}
        value={value}
        defaultValue={def_option && def_option.value}
        onBlur={(e) => onBlur && onBlur(e.target.value, id_gen)}
        onChange={(e) => onChange && onChange(e.target.value, id_gen)}
        className="form-select"
      >
        <>
          {def_option && <option value={def_option.value}>{def_option.display}</option>}
          {options && options.length > 0 && options.map((option) => <option value={option.value}>{option.display}</option>)}
        </>
      </select>
      <ErrorHint alert={alert} error={error} />
    </div>
  );
};
