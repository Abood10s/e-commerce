import React from "react";
import styled from "styled-components";

import Footer from "../Footer/Footer";
import Heading from "../heading/Heading";
import Navbar from "../navbar/Navbar";
import CartItem from "./CartItem";

const Wrapper = styled.div`
  width: 80%;
  margin: 2rem auto;
  grid-template-columns: repeat(3, 1fr) 1fr;
  gap: 1rem;
`;
const Container = styled.div``;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Heading title="My Cart (3)" />
      <Wrapper>
        <CartItem />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
