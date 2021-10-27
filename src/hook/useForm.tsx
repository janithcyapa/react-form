import _ from "lodash";

import { useState } from "react";
import FormInputProps, { value, validate } from "../types";

interface ISomeObject {
  [key: string]: any;
}
function useForm(onSubmitFunc: (data: any) => Promise<any>) {
  const [data, setData] = useState<ISomeObject>({});
  const [loading, setLoading] = useState(false);
  const [init, setInit] = useState<ISomeObject>({});
  const [error, setError] = useState<ISomeObject>({});

  // INITIALIZE FUNCTION FOR SET INIT VALUE TO EACH FIELD
  const onInit = (value: value, id: string) => {
    const temp_data = _.clone(data);
    const temp_error = _.clone(error);
    const temp_init = _.clone(init);
    temp_data[id] = value;
    temp_error[id] = null;
    temp_init[id] = true;
    setData(temp_data);
    setError(temp_error);
    setInit(temp_init);
  };

  // ON CHANGE FUNCTION
  const onChange = (value: value, id: string) => {
    const temp_data = _.clone(data);
    temp_data[id] = value;
    setData(temp_data);
  };

  // ON BLUR FUNCTION
  const onBlur = (value: value, id: string, validate: validate) => {
    const temp_error = _.clone(error);
    const validation = validate.validate(value);
    temp_error[id] = validation.error ? validation.error?.message.replace(`"value" `, "").replace(`failed custom validation because `, "").trim() : null;
    setError(temp_error);
  };

  // PROPS GENERATOR
  const inputProps = (identifier: string, validate?: validate, initial?: value) => {
    const id_gen = identifier.replace(/\s/g, "").toLowerCase();

    // INITIALIZE
    if (!init[id_gen]) {
      onInit(initial, id_gen);
    }

    // VALIDATION
    const onBlurHandler = (value: value, id: string) => {
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
    setLoading(true);
    try {
      await onSubmitFunc(data);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    inputProps,
    loading,
    onSubmit,
    setLoading,
  };
}

export default useForm;