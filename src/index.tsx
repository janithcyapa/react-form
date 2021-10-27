import { Reset, Submit } from "./helpers/button";
import { Label } from "./helpers/label";
import { Select } from "./components/select-input";
import { TextArea } from "./components/text-area";
import { Input } from "./components/text-input";
import { Image } from "./components/image-select";
import { File } from "./components/file-select";
import { useForm } from "./hook/useForm";

export const Form = {
  Label,
  Input,
  Select,
  TextArea,
  Image,
  File,
  Submit,
  Reset,
  useForm,
};

export default Form;
// module.exports = {
//   stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
// };
