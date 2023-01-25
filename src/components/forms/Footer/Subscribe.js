import React from "react";
import styled from "styled-components";
import { Text, SearchBtn } from "../navbar/Navbar";
import { Input } from "../LoginForm";
const Container = styled.div`
  background-color: #eff2f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1em;
  padding: 1.5em 0;
`;
const Element1 = styled.div``;
const Element2 = styled.div``;
export const SubscribeBtn = styled(SearchBtn)`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin-left: 0.5rem;
`;
const IInput = styled(Input)`
  height: 35px;
  width: 250px;
`;
const Heading = styled.h3`
  margin-bottom: 1rem;
`;
const Subscribe = () => {
  return (
    <Container>
      <Element1>
        <Heading>Subscribe on our newsletter</Heading>
        <Text>
          Get daily news on upcoming offers from many suppliers all over the
          world
        </Text>
      </Element1>
      <Element2>
        <IInput type="text" placeholder="✉ Email" />
        <SubscribeBtn>Subscribe</SubscribeBtn>
      </Element2>
    </Container>
  );
};

export default Subscribe;
