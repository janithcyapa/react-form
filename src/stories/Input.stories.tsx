import React from "react";
import { ComponentStory } from "@storybook/react";
import { Input } from "../components/text-input";
import FormInputProps from "../types";

export default {
  title: "Input",
  component: Input,
};

const Template: ComponentStory<typeof Input> = (args: FormInputProps) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  auto_id: "Text Input",
};
