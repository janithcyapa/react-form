import { Reset, Submit } from "./helpers/button";
import { Label } from "./helpers/label";
import { Select } from "./components/select-input";
import { TextArea } from "./components/text-area";
import { Input } from "./components/text-input";
import { Image } from "./components/image-select";
import { File } from "./components/file-select";
export * from "./hook/useForm";
const Form = {
  Label,
  Input,
  Select,
  TextArea,
  Image,
  File,
  Submit,
  Reset,
};

export default Form;
// module.exports = {
//   stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
// };
