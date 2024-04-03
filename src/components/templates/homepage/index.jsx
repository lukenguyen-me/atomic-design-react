import React from "react";
import { MainContainer, MainContent, ServicesSection, Footer } from "./styles";
import Header from "../../organisms/header";
import Hero from "../../molecules/hero";
import { menuItems } from "../../organisms/header/menuItems";

export default function Homepage() {
  return (
    <>
      <MainContainer>
        <Header menuItems={menuItems}></Header>
        <Hero
          imageUrl="http://demo.patternlab.io/images/fpo_hero.png"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas ex hendrerit massa rhoncus, quis tempor velit fermentum."
        />
        <MainContent>
          <ServicesSection />
        </MainContent>
      </MainContainer>
      <Footer />
    </>
  );
}
