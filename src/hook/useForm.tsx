import _ from "lodash";

import { useState } from "react";
import FormInputProps, { validate } from "../types";

interface ISomeObject {
  [key: string]: any;
}
export function useForm(onSubmitFunc: (data: any, error: any) => Promise<any>) {
  const [data, setData] = useState<ISomeObject>({});
  const [loading, setLoading] = useState(false);
  const [init, setInit] = useState<ISomeObject>({});
  const [validators, setValidators] = useState<ISomeObject>({});
  const [error, setError] = useState<ISomeObject>({});

  // INITIALIZE FUNCTION FOR SET INIT VALUE TO EACH FIELD
  const onInit = (value: any, id: string, validate?: validate) => {
    const temp_data = _.clone(data);
    const temp_error = _.clone(error);
    const temp_init = _.clone(init);
    const temp_validators = _.clone(validators);
    temp_data[id] = value;
    temp_error[id] = null;
    temp_init[id] = true;
    temp_validators[id] = validate;
    setData(temp_data);
    setError(temp_error);
    setInit(temp_init);
    setValidators(temp_validators);
  };
  // INITIALIZE FUNCTION FOR SET INIT VALUE TO EACH FIELD
  const reset = (value: any, id: string, validate?: validate) => {
    const temp_data = _.clone(data);
    const temp_error = _.clone(error);

    Object.keys(data)?.forEach((key) => {
      temp_data[key] = init[key];
      temp_error[key] = null;
    });
    setData(temp_data);
    setError(temp_error);
  };

  // ON CHANGE FUNCTION
  const onChange = (value: any, id: string) => {
    const temp_data = _.clone(data);
    temp_data[id] = value;
    setData(temp_data);
  };

  // ON BLUR FUNCTION
  const onBlur = (value: any, id: string, validate: validate) => {
    const temp_error = _.clone(error);
    const validation = validate.validate(value);
    temp_error[id] = validation.error ? validation.error?.message.replace(`"value" `, "").replace(`failed custom validation because `, "").trim() : null;
    setError(temp_error);
  };

  // PROPS GENERATOR
  const inputProps = (identifier: string, validate?: validate, initial?: any) => {
    const id_gen = identifier.replace(/\s/g, "").toLowerCase();
    // INITIALIZE
    if (!init[id_gen]) {
      onInit(initial, id_gen, validate);
    }

    // VALIDATION
    const onBlurHandler = (value: any, id: string) => {
      // if (!(process.env.NODE_ENV && process.env.NODE_ENV === 'development'))
      if (validate) onBlur(value, id, validate);
    };

    const props: FormInputProps = {
      auto_id: identifier,
      value: data[id_gen],
      onChange: onChange,
      onBlur: onBlurHandler,
      error: error[id_gen],
      disabled: loading,
    };

    return props;
  };

  // ON SUBMIT
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    var err = null;
    Object.keys(data)?.forEach((key) => {
      if (validators[key]) {
        const validation = validators[key].validate(data[key]);
        const isError = validation.error ? validation.error?.message.replace(`"value" `, "").replace(`failed custom validation because `, "").trim() : null;
        if (isError) {
          const temp_error = _.clone(error);
          temp_error[key] = isError;
          setError(temp_error);
          err = isError;
        }
      }
    });
    if (err === null) {
      try {
        setLoading(true);
        await onSubmitFunc(data, error);
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    data,
    error,
    inputProps,
    loading,
    reset,
    onSubmit,
    setLoading,
    setData,
    setError,
    setInit,
  };
}
