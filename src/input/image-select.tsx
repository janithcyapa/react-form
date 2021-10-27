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
  const id_gen = auto_id ? auto_id.replace(/\s/g, "").toLowerCase() : null;
  return (
    <div className={className}>
      {label !== false && <Label label={label || auto_id || ""} id={id_gen || id || ""} />}
      <div
        onClick={() => fileInput.current?.click()}
        className="group relative overflow-hidden w-full h-96 my-8 bg-gray-200 rounded-xl cursor-pointer select-none"
      >
        {(fileInput.current?.files || value) && (
          <img
            src={fileInput.current?.files ? URL.createObjectURL(fileInput.current?.files[0]) : value?.toString()}
            alt=""
            className=" w-full h-96 object-cover"
          />
        )}
        <div className="bg-white bg-opacity-30 opacity-0 group-hover:opacity-100 animate text-white absolute bottom-0 left-0 w-full h-36 flex flex-col items-center justify-center ">
          <BiImageAdd size="32" className="" />
          <p className="text-white ">{label || "Add " + auto_id}</p>
          <input
            disabled={disabled}
            {...rest}
            ref={fileInput}
            type="file"
            className="hidden"
            accept="image/*"
            id={id || id_gen || ""}
            name={name || auto_id || id || ""}
            placeholder={placeholder || "Enter " + auto_id || ""}
            autoComplete={autocomplete || id_gen || id || ""}
            onBlur={(e) => onBlur && onBlur(e.target.value, id || id_gen || "")}
            onChange={(e) => onChange && onChange(e.target.value, id || id_gen || "")}
          />
        </div>
      </div>

      <ErrorHint alert={alert} error={error} />
    </div>
  );
};
