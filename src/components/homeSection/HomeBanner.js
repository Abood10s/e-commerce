import React from "react";
import styled from "styled-components";
import { Text } from "../forms/navbar/Navbar";
import { HeroImg, Button, P } from "../../herogrid/HeroGrid";
import ColoredDiv from "./ColoredDiv";
import BannerBtn from "./BannerBtn";
import BannerImg from "./Banner.png";

import Avatar from "./Avatar.png";
const Wrapper = styled.div`
  width: 80%;
  margin: 2rem auto;
  border: 1px solid #e3e8ee;
  border-radius: 4px;
  padding: 0.9rem 1em;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  background-color: #fff;
  gap: 1rem;
  background-color: ${(props) => props.theme.primaryClr};
  color: ${(props) => props.theme.secondaryClr};
  @media (max-width: 1000px) {
    grid-template-columns: 2fr;
    width: 60%;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 80%;
  }
`;
const IIcon = styled.img``;
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const HHeroImg = styled(HeroImg)`
  width: auto;
  height: 95%;
  padding: 3em 2em;
`;
const Cont = styled.div`
  background-color: #e3f0ff;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 1em;
  border-radius: 5px;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7em;
`;
const Banner = styled.div``;
const Flex = styled.div``;
const Active = styled.p`
  border-radius: 5px;
  font-weight: bold;
  padding: 1px;
  &:first-child {
    background-color: #e5f1ff;
    padding: 4px;
  }
`;
const H2 = styled.h2`
  margin: 0.4em 0 0.7em 0;
`;
const cats = [
  "Clothes and wear",
  "Home interiors",
  "Computer and tech",
  "Tools, equipments",
  "Sports and outdoor",
  "Animal and pets",
  "Machinery tools",
  "More category",
];
const HomeBanner = ({ theme }) => {
  return (
    <Wrapper theme={theme}>
      <List theme={theme}>
        <Active>Automobiles</Active>
        {cats.map((item) => (
          <Active key={item}>{item}</Active>
        ))}
      </List>
      <Banner>
        <HHeroImg himg={BannerImg}>
          <h3>Latest trending</h3>
          <H2>Electronic items </H2>
          <Button>Source now</Button>
        </HHeroImg>
      </Banner>
      <Flex theme={theme}>
        <Cont>
          <User>
            <IIcon src={Avatar} />
            <h4>Hi, user let’s get started</h4>
          </User>
          <BannerBtn bg="#0D6EFD" clr="#FFFFFF" txt="Join now" />
          <BannerBtn bg="#FFFFFF" clr="#0D6EFD" txt="Log in" />
        </Cont>
        <ColoredDiv bg="#F38332" txt="Get US $10 off with a new supplier" />
        <ColoredDiv bg="#55BDC3" txt="Send quotes with supplier preferences" />
      </Flex>
    </Wrapper>
  );
};

export default HomeBanner;
