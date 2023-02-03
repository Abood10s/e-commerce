import React from "react";
import styled from "styled-components";

import { Button } from "../herogrid/HeroGrid";

import disc from "../../assets/discount.png";

const Cont = styled.div`
  background: url(${disc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  border-radius: 7px;
  width: 80%;
  margin: 2rem auto;
  padding: 1.5em 2em;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Discount = () => {
  return (
    <Cont>
      <Text>
        <h3>Super discount on more than 100 USD</h3>
        <p>Have you ever finally just write dummy info</p>
      </Text>
      <Button style={{ background: "#FF9017", color: "#fff" }}>
        Shop now{" "}
      </Button>
    </Cont>
  );
};

export default Discount;
