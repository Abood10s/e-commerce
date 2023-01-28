import React from "react";
import styled from "styled-components";

import card1 from "./card1.png";
import card2 from "./card2.png";
import card3 from "./card3.png";
import card4 from "./card4.png";
import inv from "./inv.png";
import search from "./search.png";
import send from "./send.png";
import security from "./security.png";
const Wrapper = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const CardCont = styled.div`
  background-color: #fff;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  padding-bottom: 0.5rem;
  background-color: ${(props) => props.theme.primaryClr};
  color: ${(props) => props.theme.secondaryClr};
`;
const Img = styled.img`
  width: 100%;
`;
const Icon = styled.img``;
const P = styled.p`
  font-weight: bold;
  padding: 0.5rem 0 0.5rem 1.2em;
  font-size: 16px;
`;
const Wrap = styled.div`
  padding: 0.7rem 0.8rem;
  background-color: #d1e7ff;
  border-radius: 50%;
  width: fit-content;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 5%;
`;
const CardServ = ({ theme }) => {
  return (
    <Wrapper>
      <CardCont theme={theme}>
        <Img src={card1} />
        <Wrap>
          <Icon src={search} />
        </Wrap>
        <P>Source from </P>
        <P>Industry Hubs</P>
      </CardCont>
      <CardCont theme={theme}>
        <Img src={card2} />
        <Wrap>
          <Icon src={inv} />
        </Wrap>
        <P>Fast, reliable shipping </P>
        <P>by ocean or air</P>
      </CardCont>
      <CardCont theme={theme}>
        <Img src={card3} />
        <Wrap>
          <Icon src={send} />
        </Wrap>
        <P>Customize your </P>
        <P>products</P>
      </CardCont>
      <CardCont theme={theme}>
        <Img src={card4} />
        <Wrap>
          <Icon src={security} />
        </Wrap>
        <P>Source from </P>
        <P>Industry Hubs</P>
      </CardCont>
    </Wrapper>
  );
};

export default CardServ;
