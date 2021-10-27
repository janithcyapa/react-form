import React, { useRef } from "react";
import { ErrorHint } from "../helpers/error";
import { Label } from "../helpers/label";
import FormInputProps from "../types";

export const Image = ({
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
        <div onClick={() => fileInput.current?.click()} className="group relative w-full h-full cursor-pointer select-none">
          {value && value.src && <img src={value.src} alt="" className="w-full h-full object-cover" />}
          <div className="bg-white bg-opacity-30 opacity-0 group-hover:opacity-100 animate text-white absolute bottom-0 left-0 w-full h-1/2 flex flex-col items-center justify-center ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="transform scale-115" width="24" height="24" viewBox="0 0 24 24">
              <path d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z"></path>
              <path d="m8 11-3 4h11l-4-6-3 4z"></path>
              <path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path>
            </svg>
            <p className="text-white mt-1">{label || "Add " + auto_id}</p>
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
                if (e.target.files) {
                  onBlur && onBlur(e.target.files[0], id_gen);
                  onChange &&
                    onChange(
                      {
                        file: e.target.files[0],
                        src: URL.createObjectURL(e.target.files[0]),
                      },
                      id_gen
                    );
                }
              }}
            />
          </div>
        </div>
      </div>
      <ErrorHint alert={alert} error={error} />
    </>
  );
};
