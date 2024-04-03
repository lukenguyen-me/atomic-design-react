import React from "react";
import { HeroContainer } from "./styles";
import imagePlaceholder from "../../../res/img/placeholders/1280x720.png";

export default function Hero(props) {
  const { imageUrl = imagePlaceholder, text = "Hellow World" } = props;

  return (
    <HeroContainer imageUrl={imageUrl}>
      <img
        className="hero-image"
        src={imageUrl}
        alt="Hero"
        width="100%"
        height="100%"
      />
      <h2 className="hero-text">{text}</h2>
    </HeroContainer>
  );
}
