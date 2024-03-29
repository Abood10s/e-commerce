import React, { useContext } from "react";
import styled from "styled-components";

import { IconsWrapper, Icon } from "../forms/FormFooter";

import americanex from "../../assets/form icons/americanex.png";
import visa from "../../assets/form icons/visa.png";
import mastercard from "../../assets/form icons/mastercard.png";
import paypal from "../../assets/form icons/paypal.png";
import { CartCtx } from "../../Contexts/CartContext";

const BillCont = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border: 1px solid #e3e8ee;
  border-radius: 4px;
  padding: 1rem;
  box-shadow: 0px 0px 2px 1px rgba(56, 56, 56, 0.1);
`;
const Txt = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  font-weight: bold;
`;
const Total = styled.div``;
export const Red = styled(Txt)`
  color: #fa3434;
`;
export const Green = styled(Txt)`
  color: #00b517;
`;
const Prices = styled.div`
  border-bottom: 1px solid #e4e4e4;
`;
const CheckoutBtn = styled.button`
  background-color: #00b517;
  color: #fff;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  width: 100%;
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 1rem;
`;
const IIconsWrapper = styled(IconsWrapper)`
  margin: 0.5rem auto;
  display: flex;
  justify-content: center;
`;
const Bill = ({ theme }) => {
  const { cart } = useContext(CartCtx);
  const Discount = 60.0;
  const Tax = 14.0;
  const getTotalPrice = (cart) => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price);
      const quantity = Number(item.quantity);
      return total + price * (quantity || 1);
    }, 0);
  };
  let finalPrice = getTotalPrice(cart) - Discount + Tax;
  return (
    <BillCont theme={theme}>
      <Prices>
        <Txt>
          <p>Subtotal:</p>
          <p>${getTotalPrice(cart).toFixed(2)}</p>
        </Txt>
        <Red>
          <p>Discount:</p>
          <p>- ${parseFloat(Discount)}</p>
        </Red>
        <Green>
          <p>Tax:</p>
          <p>+ ${parseFloat(Tax)}</p>
        </Green>
      </Prices>
      <Total>
        <Txt>
          <p>Total:</p>
          <p>${finalPrice.toFixed(2)}</p>
        </Txt>
        <CheckoutBtn>Checkout</CheckoutBtn>
        <IIconsWrapper>
          <Icon>
            <img src={americanex} alt="americanex" />
          </Icon>
          <Icon>
            <img src={mastercard} alt="mastercard" />
          </Icon>
          <Icon>
            <img src={paypal} alt="paypal" />
          </Icon>
          <Icon>
            <img src={visa} alt="visa" />
          </Icon>
        </IIconsWrapper>
      </Total>
    </BillCont>
  );
};

export default Bill;
