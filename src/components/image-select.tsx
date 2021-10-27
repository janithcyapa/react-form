import React, { useRef } from "react";
import { ErrorHint } from "../helpers/error";
import { Label } from "../helpers/label";
import { FormInputProps } from "../types";
import { BiImageAdd } from "react-icons/bi";

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
          {(fileInput.current?.files || value) && (
            <img
              src={fileInput.current?.files ? URL.createObjectURL(fileInput.current?.files[0]) : value?.toString()}
              alt=""
              className="w-full h-full object-cover"
            />
          )}
          <div className="bg-white bg-opacity-30 opacity-0 group-hover:opacity-100 animate text-white absolute bottom-0 left-0 w-full h-1/2 flex flex-col items-center justify-center ">
            <BiImageAdd size="32" className="" />
            <p className="text-white ">{label || "Add " + auto_id}</p>
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
        </div>

        <ErrorHint alert={alert} error={error} />
      </div>
    </>
  );
};
