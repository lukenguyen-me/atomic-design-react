import React, { useEffect } from "react";
import { StyledHeader, HeaderLogo } from "./styles";
import Navbar from "../../molecules/navbar";
import Logo from "../../atoms/logo";

export default function Header(props) {
  const [activeClass, setActiveClass] = React.useState("");

  const handleScroll = () => {
    let c = "normal";
    if (window.scrollY !== 0) {
      c = "shadow";
    }
    setActiveClass(c);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { height = 25 } = props;

  return (
    <StyledHeader className={`${activeClass} header`}>
      <HeaderLogo>
        <Logo
          src="https://kc.qa.axon-networks.com/auth/resources/nmqhs/login/axon_orchestrator_theme/img/axon-logo.png"
          height={height}
          alt="AXON Logo"
        />
      </HeaderLogo>
      <Navbar menuItems={props.menuItems} />
    </StyledHeader>
  );
}
