import Button from "./index";

export default {
  component: Button,
};

export const Default = {
  args: {
    children: "Click me",
  },
};

export const Disabled = {
  args: {
    children: "Click me",
    disabled: true,
  },
};

export const Raised = {
  args: {
    children: "Click me",
    raised: true,
  },
};

export const Outlined = {
  args: {
    children: "Click me",
    Outlined: true,
  },
};

export const Rounded = {
  args: {
    children: "Click me",
    rounded: true,
  },
};
