import React from "react";
import { StyledMenu, MenuItem } from "./styles";
import Link from "../../atoms/link";

export default function Navbar(props) {
  const { menuItems = [{ name: "Menu Item", route: "#" }] } = props;
  return (
    <StyledMenu>
      {menuItems.map((menuItem) => {
        return (
          <MenuItem>
            <Link href={menuItem.route || "#"}>{menuItem.name}</Link>
          </MenuItem>
        );
      })}
    </StyledMenu>
  );
}
