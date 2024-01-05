import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  title: "Hello world!",
  size: "lg",
  color: "primary",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  title: "Click me!",
};
