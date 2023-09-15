import styled from "styled-components";

import { Blue } from "../Accordions/Accordion";

import like from "../../assets/card images/like.png";
import AddToCart from "../Buttons/AddToCart";
import { useState } from "react";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 1.2em 1em;
  border: 1px solid ${(props) => props.theme.toggleBorder};
  border-radius: 4px;
  gap: 0.5em;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5em;
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 0.5rem;
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
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
  background-color: ${(props) => (props.isLiked ? "#71c5e7 " : "#fff")};
  &:hover {
    border: 1px solid #0d6efd;
  }
`;

const Green = styled(Blue)`
  color: #00b517;
  font-size: 16px;
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
  align-items: center;
  gap: 1em;
`;
const IImage = styled.img`
  height: 20px;
  @media (max-width: 450px) {
    height: 10px;
  }
`;
const Image = styled.img`
  height: 200px;
  width: 200px;
  margin: auto;
  @media (max-width: 1050px) {
    height: 200px;
    width: 200px;
    margin: auto;
  }
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const Icon = styled.img`
  height: 80%;
`;

const TechCardGrid = ({ theItem, theme }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { image, title, img, orders, price, rating, shipping } = theItem;
  return (
    <Wrap theme={theme}>
      <Image src={image || img} />
      <Body>
        <Flex1>
          <h4>{title}</h4>
          <LBody isLiked={isLiked} onClick={() => setIsLiked(!isLiked)}>
            <Icon src={like} />
          </LBody>
        </Flex1>
        <Price>{price}$</Price>
        <Flex2>
          <IImage src={rating} />
          <p>{orders} orders</p>
          <Green>{shipping}</Green>
        </Flex2>

        <Blue>View details</Blue>
        <AddToCart theItem={theItem} />
      </Body>
    </Wrap>
  );
};

export default TechCardGrid;
