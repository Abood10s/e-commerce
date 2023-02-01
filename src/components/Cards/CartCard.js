import React from "react";
import styled from "styled-components";

import { AddToCart } from "./TechCard";

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

const CartCard = ({ img, price, body }) => {
  return (
    <CartCont>
      <Image src={img} />
      <P>{price}</P>
      <Cont>{body}</Cont>
      <AddToCart>
        {" "}
        <i class="fa-solid fa-cart-shopping"></i>Move to cart
      </AddToCart>
    </CartCont>
  );
};

export default CartCard;
