import Header from "./index";
import { menuItems } from "./menuItems";

export default {
  component: Header,
  decorators: [
    (Story) => (
      <div style={{ background: "black", height: "13vh" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  args: {
    menuItems,
  },
};
