import React from "react";
import { CgSpinnerTwo as Spinner } from "react-icons/cg";
import { ButtonProps } from "../types";

export function Submit({ button_type = "flat", label, className, loading, ...rest }: ButtonProps) {
  return (
    <>
      <button {...rest} type="submit" disabled={rest?.disabled && rest?.disabled === true ? rest?.disabled : loading ? loading : false} className="form-submit">
        {loading && loading === true ? <Spinner className={`animate-spin mx-auto`} /> : <> {label}</>}
      </button>
    </>
  );
}

export function Reset({ label, className, loading, ...rest }: ButtonProps) {
  return (
    <>
      <button {...rest} disabled={rest?.disabled && rest?.disabled === true ? rest?.disabled : loading ? loading : false} className="form-reset">
        {label}
      </button>
    </>
  );
}
