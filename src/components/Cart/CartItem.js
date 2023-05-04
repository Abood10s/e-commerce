import React, { useState } from "react";
import styled from "styled-components";
import CartMBtn from "../Buttons/CartMBtn";
import CartSBtn from "../Buttons/CartSBtn";
import { Select } from "../forms/SignupForm";
import { Text } from "../navbar/Navbar";
const Img = styled.img`
  margin: auto;
  width: 200px;
  height: 200px;
  object-fit: contain;
`;
const CartCont = styled.div`
  border-bottom: 1px solid #e3e8ee;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 7fr;
  gap: 1rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
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
  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
const FlexBody = styled(Flex)`
  @media (max-width: 600px) {
    display: none;
  }
`;
const Price = styled.h4``;
const CartItem = ({ img, title, price, body, id, quantity, theme }) => {
  quantity = quantity || 1;
  const [quant, setQuant] = useState(quantity || 1);
  return (
    <CartCont theme={theme}>
      <Img src={img} />
      <Body>
        <Flex>
          <h4>{title || body}</h4>
          <Price>{price * quant}$</Price>
        </Flex>
        <FlexBody>
          <Text>{body}</Text>
          <Select onChange={(e) => setQuant(e.target.value)}>
            <option value={quant}>Qty: {quant}</option>
            {[...Array(6)].map(
              (_, i) =>
                i !== quantity &&
                i !== 0 && (
                  <option key={i} value={i}>
                    Qty: {i}
                  </option>
                )
            )}
          </Select>
          {/* <option value="2">Qty: 1</option>
            <option value="3">Qty: 2</option>
            <option value="4">Qty: 3</option>
            <option value="5">Qty: 4</option> */}
        </FlexBody>
        <Flex2>
          <CartSBtn id={id} />
          <CartMBtn />
        </Flex2>
      </Body>
    </CartCont>
  );
};

export default CartItem;
