import React, { useRef } from "react";
import { ErrorHint } from "../helpers/error";
import { Label } from "../helpers/label";
import { FormInputProps } from "../types";
import { BiImageAdd } from "react-icons/bi";

export const File = ({
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
  const fileInput = useRef<HTMLInputElement>(null);
  const id_gen = id || (auto_id ? auto_id.replace(/\s/g, "").toLowerCase() : "");
  return (
    <>
      {label !== false && <Label label={label || auto_id || ""} id={id_gen} />}
      <div className={className + " form-img"}>
        <div
          onClick={() => fileInput.current?.click()}
          className="group relative w-full h-full cursor-pointer select-none flex flex-col items-center justify-center text-black"
        >
          <BiImageAdd size="32" className="" />
          <p className="text-black ">{fileInput.current?.files ? fileInput.current?.files.item.name : label || "Add " + auto_id}</p>
          <input
            disabled={disabled}
            {...rest}
            ref={fileInput}
            type="file"
            className="hidden"
            accept="image/*"
            id={id_gen}
            name={name || id_gen}
            placeholder={placeholder || "Enter " + auto_id || ""}
            autoComplete={autocomplete || id_gen}
            onBlur={(e) => e.target.files && onBlur && onBlur(e.target.files[0], id_gen)}
            onChange={(e) => {
              e.target.files && onBlur && onBlur(e.target.files[0], id_gen);
              e.target.files && onChange && onChange(e.target.files[0], id_gen);
            }}
          />
        </div>

        <ErrorHint alert={alert} error={error} />
      </div>
    </>
  );
};
