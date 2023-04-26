import React from "react";
import styled from "styled-components";

import card1 from "../../assets/card images/card1.png";
import card2 from "../../assets/card images/card2.png";
import card3 from "../../assets/card images/card3.png";
import card4 from "../../assets/card images/card4.png";
import inv from "../../assets/card images/inv.png";
import search from "../../assets/card images/search.png";
import send from "../../assets/card images/send.png";
import security from "../../assets/card images/security.png";
const Wrapper = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 1em;
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
  @media (max-width: 768px) {
    top: 65%;
  }
  @media (max-width: 658px) {
    top: 62%;
  }
  @media (max-width: 600px) {
    top: 56%;
  }
  @media (max-width: 400px) {
    top: 50%;
  }
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
