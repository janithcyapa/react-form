import Joi from "joi";
export type value = string | number | File | undefined;
export type validate = Joi.StringSchema | Joi.NumberSchema;
export interface FormInputProps {
  auto_id?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  autocomplete?: string;
  label?: string | false;
  className?: string;
  value?: string | number;
  onChange?: (data: value, id: string) => unknown;
  onBlur?: (data: value, id: string) => unknown;
  type?: string;
  alert?: string;
  error?: string;
  def_option?: SelectOptionsPros;
  options?: SelectOptionsPros[];
  [x: string]: unknown;
}

export interface SelectOptionsPros {
  value: string;
  display: string;
}

export interface LabelProps {
  label: string;
  id: string;
}

export interface ButtonProps {
  label?: string;
  className?: string;
  loading?: boolean;
  [x: string]: unknown;
}

export interface ErrorHintProps {
  error?: string;
  alert?: string;
}
export default FormInputProps;
