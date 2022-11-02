import React from "react";
import { Button } from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);
export const Left = Template.bind({});
Left.args = {
  className: "w-52",
  direction: "left-0",
  inset: "inset-y-0",
};
export const Right = Template.bind({});
Right.args = {
  className: "w-52",
  direction: "right-0",
  inset: "inset-y-0",
};
export const Top = Template.bind({});
Top.args = {
  className: "w-52",
  direction: "top-0",
  inset: "inset-x-0",
};
export const Bottom = Template.bind({});
Bottom.args = {
  className: "w-52",
  direction: "bottom-0",
  inset: "inset-x-0",
};
