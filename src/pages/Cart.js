import React, { useContext, useState } from "react";
import styled from "styled-components";

import Footer from "../components/Footer/Footer";
import Heading from "../components/heading/Heading";
import Navbar from "../components/navbar/Navbar";
import CartItem from "../components/Cart/CartItem";
import CartMBtn from "../components/Buttons/CartMBtn";
import { SubscribeBtn } from "../components/Footer/Subscribe";
import CheckCoupon from "../components/checkcoupon/CheckCoupon";

import herog1data from "../Herogrid1data";
import { CartCtx } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
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
  const { cart } = useContext(CartCtx);

  return (
    <Container>
      <Navbar />

      <Heading title={`My cart (${cart.length})`} />
      <Wrapper>
        <Container1>
          {cart.map((product) => {
            const { image, title, price, body, id } = product;
            return (
              <CartItem
                key={id}
                img={image}
                title={title}
                price={price}
                id={id}
                body={body}
              />
            );
          })}
          {cart.length !== 0 ? (
            <Buttons>
              <Link to="/store" style={{ textDecoration: "none" }}>
                <SubscribeBtn>
                  <i class="fa-solid fa-arrow-left-long"></i>Back to shop
                </SubscribeBtn>
              </Link>
              <CartMBtn title="Remove all" />
            </Buttons>
          ) : (
            "You Don't Have Any Thing In Your Cart"
          )}
        </Container1>
        <Container2>{cart.length !== 0 ? <CheckCoupon /> : ""}</Container2>
        <i class="fa-solid fa-cart-shopping"></i>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
