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
  const id_gen = auto_id ? auto_id.replace(/\s/g, "").toLowerCase() : null;
  return (
    <div className={className}>
      {label !== false && <Label label={label || auto_id || ""} id={id_gen || id || ""} />}
      <select
        {...rest}
        id={id || id_gen || ""}
        name={name || auto_id || id || ""}
        placeholder={placeholder || "Enter " + auto_id || ""}
        autoComplete={autocomplete || id_gen || id || ""}
        value={value}
        defaultValue={def_option && def_option.value}
        onBlur={(e) => onBlur && onBlur(e.target.value, id || id_gen || "")}
        onChange={(e) => onChange && onChange(e.target.value, id || id_gen || "")}
        className="bg-gray-100 w-full px-2 py-2  rounded-md text-base text-gray-800  border-2 border-gray-200 focus:border-blue-600 focus:bg-blue-50 outline-none"
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
