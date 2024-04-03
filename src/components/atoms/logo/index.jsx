import * as React from "react";
import defaultLogo from "../../../res/img/placeholders/300x100-logo.png";
import { StyledLogo } from "./styles";

const Logo = (props) => {
  return (
    <StyledLogo>
      <img src={defaultLogo} alt="Logo" {...props} />
    </StyledLogo>
  );
};

export default Logo;
