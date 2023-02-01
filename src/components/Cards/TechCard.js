import styled from "styled-components";

import { Blue } from "../Accordions/Accordion";
import { Icon } from "../navbar/Navbar";

import like from "../../assets/card images/like.png";
import AddToCart from "../Buttons/AddToCart";

const Wrap = styled.div`
  display: flex;
  margin: 1rem;
  background-color: #fff;
  padding: 1.2em 1em;
  border: 1px solid #e3e8ee;
  border-radius: 4px;
  gap: 1em;
  @media (max-width: 1050px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5em;
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  &:hover {
    border: 1px solid #0d6efd;
  }
`;
const Flex = styled.div`
  display: flex;
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
  gap: 1em;
`;
const IImage = styled.img``;
const Image = styled.img`
  @media (max-width: 1050px) {
    height: 200px;
    width: 200px;
    margin: auto;
  }
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;
const P = styled.p`
  @media (max-width: 768px) {
    display: none;
  }
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
          <IImage src={rating} />
          <p>{orders} orders</p>
          <Green>{shipping}</Green>
        </Flex2>
        <Flex>
          <P>{body}</P>
        </Flex>
        <Blue>View details</Blue>
        <AddToCart item={item} />
      </Body>
    </Wrap>
  );
};

export default TechCard;
