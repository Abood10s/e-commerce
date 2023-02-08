import React from "react";
import styled from "styled-components";
import CartMBtn from "../Buttons/CartMBtn";
import CartSBtn from "../Buttons/CartSBtn";
import { Select } from "../forms/SignupForm";
import { Text } from "../navbar/Navbar";
const Img = styled.img`
  margin: auto;
`;
const CartCont = styled.div`
  border-bottom: 1px solid #e3e8ee;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 7fr;
  gap: 1rem;
  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
  }
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Flex2 = styled.div`
  display: flex;
  gap: 0.5em;

  align-items: center;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
const Price = styled.h4``;
const CartItem = ({ img, title, price, body, id }) => {
  return (
    <CartCont>
      <Img src={img} />
      <Body>
        <Flex>
          <h4>{title}</h4>
          <Price>{price}$</Price>
        </Flex>
        <Flex>
          <Text>{body}</Text>
          <Select>
            <option value="3">Qty: 3</option>
          </Select>
        </Flex>
        <Flex2>
          <CartSBtn id={id} />
          <CartMBtn />
        </Flex2>
      </Body>
    </CartCont>
  );
};

export default CartItem;
