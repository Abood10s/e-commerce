import React from "react";
import styled from "styled-components";
import { Blue } from "../Accordions/Accordion";
import { Icon } from "../forms/navbar/Navbar";
import like from "./like.png";
const Wrap = styled.div`
  display: flex;
  margin: 1rem;
  background-color: #fff;
  padding: 1.2em 1em;
  border: 1px solid #e3e8ee;
  border-radius: 4px;
  gap: 1em;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const LBody = styled.div`
  padding: 0.7rem;
  border-radius: 7px;
  cursor: pointer;
  border: 1px solid #e3e8ee;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  &:hover {
    border: 1px solid #0d6efd;
  }
`;
const Flex = styled.div`
  display: flex;
`;
const Price = styled.p`
  font-weight: bold;
`;
const Flex1 = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Flex2 = styled.div`
  display: flex;
  gap: 1em;
`;

const Image = styled.img``;
const Green = styled(Blue)`
  color: #00b517;
  font-size: 16px;
`;
const TechCard = ({ item }) => {
  const { image, title, orders, price, rating, body, shipping } = item;
  return (
    <Wrap>
      <Image src={image} />
      <Body>
        <Flex1>
          <h4>{title}</h4>
          <LBody>
            <Icon src={like} />
          </LBody>
        </Flex1>
        <Price>{price}</Price>
        <Flex2>
          <Image src={rating} />
          <p>{orders} orders</p>
          <Green>{shipping}</Green>
        </Flex2>
        <Flex>
          <p>{body}</p>
        </Flex>
        <Blue>View details</Blue>
      </Body>
    </Wrap>
  );
};

export default TechCard;
