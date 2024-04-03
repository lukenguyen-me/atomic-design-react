import Input from "./index";

export default {
  component: Input,
};

export const Default = {
  args: {},
};

export const Placeholder = {
  args: {
    placeholder: "Input placeholder",
  },
};

export const Disabled = {
  args: {
    placeholder: "Input disabled",
    disabled: true,
  },
};
