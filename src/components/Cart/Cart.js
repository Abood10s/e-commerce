import React from "react";
import styled from "styled-components";

import Footer from "../Footer/Footer";
import Heading from "../heading/Heading";
import Navbar from "../navbar/Navbar";
import CartItem from "./CartItem";
import CartMBtn from "../Buttons/CartMBtn";
import { SubscribeBtn } from "../Footer/Subscribe";
import CheckCoupon from "../checkcoupon/CheckCoupon";

import herog1data from "../../Herogrid1data";
const cartitems = herog1data.slice(0, 3);

const Wrapper = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 1rem;
  border-radius: 4px;
  @media (max-width: 1050px) {
    grid-template-columns: 2fr 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
const Container = styled.div``;
const Container1 = styled.div`
  background-color: #fff;
  width: 100%;
  border-radius: 4px;
  padding: 1rem;
  border: 1px solid #e3e8ee;
`;
const Container2 = styled.div`
  border-radius: 4px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Heading title="My Cart (3)" />
      <Wrapper>
        <Container1>
          {cartitems.map((item) => {
            const { image, price } = item;
            return (
              <CartItem
                img={image}
                title={"T-shirts with multiple colors, for men and lady"}
                price={price}
                body={"hey body test hey body test hey body test"}
              />
            );
          })}
          <Buttons>
            <SubscribeBtn>
              <i class="fa-solid fa-arrow-left-long"></i>Back to shop
            </SubscribeBtn>
            <CartMBtn title="Remove all" />
          </Buttons>
        </Container1>
        <Container2>
          <CheckCoupon />
        </Container2>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
