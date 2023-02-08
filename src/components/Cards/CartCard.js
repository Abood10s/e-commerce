import React from "react";
import styled from "styled-components";
import AddToCart from "../Buttons/AddToCart";

const CartCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;
const Image = styled.img`
  width: 100%;
`;
const Cont = styled.p``;
const P = styled.h4``;

const CartCard = ({ item }) => {
  const { img, price, body } = item;
  return (
    <CartCont>
      <Image src={img} />
      <P>{price}$</P>
      <Cont>{body}</Cont>
      <AddToCart item={item} />
    </CartCont>
  );
};

export default CartCard;
