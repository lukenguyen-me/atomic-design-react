import Navbar from "./index";
import { menuItems } from "../../organisms/header/menuItems";

export default {
  component: Navbar,
  decorators: [
    (Story) => (
      <div style={{ background: "#222", height: "10vh" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  args: {},
};

export const WithMenuItems = {
  args: {
    menuItems,
  },
};
