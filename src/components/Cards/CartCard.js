import React from "react";
import styled from "styled-components";
import AddToCart from "../Buttons/AddToCart";

const CartCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin: 1rem 0;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.toggleBorder};
  padding: 0.5rem;
  border-radius: 5px;
`;
const Image = styled.img`
  width: 100%;
  @media (max-width: 768px) {
    height: 70%;
    width: 70%;
    objet-fit: cover;
    margin: auto;
  }
`;
const Cont = styled.p``;
const P = styled.h4``;

const CartCard = ({ item, theme }) => {
  const { img, price, body } = item;
  return (
    <CartCont theme={theme}>
      <Image src={img} />
      <P>{price}$</P>
      <Cont>{body}</Cont>
      <AddToCart theItem={item} />
    </CartCont>
  );
};

export default CartCard;
