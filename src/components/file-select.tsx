import React, { useRef } from "react";
import { ErrorHint } from "../helpers/error";
import { Label } from "../helpers/label";
import { FormInputProps } from "../types";

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
      <div className={className + " form-file"}>
        <div
          onClick={() => fileInput.current?.click()}
          className="group relative w-full h-full cursor-pointer select-none flex flex-col items-center justify-center text-black"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="transform scale-125" width="24" height="24" viewBox="0 0 24 24">
            <path d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z"></path>
            <path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8zm11-2h-2v3h-3v2h3v3h2v-3h3V9h-3z"></path>
          </svg>
          <p className="text-black ">{fileInput.current?.files ? fileInput.current?.files.item.name : label || "Add " + auto_id}</p>
          <input
            disabled={disabled}
            {...rest}
            ref={fileInput}
            type="file"
            className="hidden"
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
      </div>
      <ErrorHint alert={alert} error={error} />
    </>
  );
};
