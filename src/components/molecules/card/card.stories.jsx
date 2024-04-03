import Card from "./index";
import {
  basic_smartphone,
  basic_lightbulb,
  basic_webpage_img_txt,
} from "react-icons-kit/linea/";

export default {
  component: Card,
};

export const Default = {
  args: {
    children: "Lorem ipsum dolor sit amet",
  },
};

export const WithIcon = {
  args: {
    children: "Lorem ipsum dolor sit amet",
    icon: basic_lightbulb,
  },
};

export const WithTitle = {
  args: {
    children: "Lorem ipsum dolor sit amet",
    title: "Title",
  },
};

export const WithIconAndTitle = {
  args: {
    children: "Lorem ipsum dolor sit amet",
    title: "Title",
    icon: basic_lightbulb,
  },
};
