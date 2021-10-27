import { Reset, Submit } from "./helpers/button";
import { Label } from "./helpers/label";
import { Select } from "./components/select-input";
import { TextArea } from "./components/text-area";
import { Input } from "./components/text-input";
import { Image } from "./components/image-select";
import useForm from "./hook/useForm";
const Form = {
  Label,
  Input,
  Select,
  TextArea,
  Image,
  Submit,
  Reset,
  useForm,
};

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
};
export default Form;
