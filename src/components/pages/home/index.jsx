import React, { Fragment } from "react";
import {
  MainContainer,
  MainContent,
  Footer,
  ServicesSection,
} from "../../templates/homepage/styles";
import Hero from "../../molecules/hero";
import Header from "../../organisms/header";
import {
  basic_smartphone,
  basic_lightbulb,
  basic_webpage_img_txt,
} from "react-icons-kit/linea/";
import { menuItems } from "../../organisms/header/menuItems";
import Card from "../../molecules/card";

export default function Home() {
  function getRandomImage() {
    const randomImg = [
      {
        url: "https://images.unsplash.com/photo-1457365050282-c53d772ef8b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      },
      {
        url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1987&q=80",
      },
      {
        url: "https://images.unsplash.com/photo-1531707566548-6577aab321d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      },
    ];

    return randomImg[Math.floor(Math.random() * randomImg.length)];
  }

  function getServices() {
    const services = [
      {
        icon: basic_smartphone,
        title: "Mobile App Development",
        description: "We design & develop beautiful iOS & Android mobile apps.",
      },
      {
        icon: basic_lightbulb,
        title: "Startups",
        description: `We build beautiful platform customised to your needs. Tell us your idea now!`,
      },
      {
        icon: basic_webpage_img_txt,
        title: "Web Development",
        description: `We build beautiful responsive sites that will not remain unnoticed.`,
      },
    ];

    return services;
  }

  return (
    <Fragment>
      <MainContainer>
        <Header menuItems={menuItems} />
        <Hero
          imageUrl={getRandomImage().url}
          text="Empowering Service Providers to Offer a Total Network Experience"
        ></Hero>
        <MainContent>
          <ServicesSection>
            <ul>
              {getServices().map((service) => {
                return (
                  <Card title={service.title} icon={service.icon}>
                    {service.description}
                  </Card>
                );
              })}
            </ul>
          </ServicesSection>
        </MainContent>
      </MainContainer>
      <Footer />
    </Fragment>
  );
}
