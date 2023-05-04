import React from "react";
import styled from "styled-components";

import { Wrap } from "../../Footer/Footer";
import InquiryForm from "../InquiryForm";

import maskform from "../../../assets/form icons/maskform.png";

const Wrapper = styled.div`
  width: 80%;
  margin: 2rem auto;
  background: url(${maskform});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 2em 2em;
  border-radius: 5px;
`;
const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 0 0.5rem;
  border-radius: 8px;
`;

const Text = styled.h2`
  color: #fff;
  width: 70%;
  margin: 1em 0;
`;
const Text2 = styled.p`
  color: #fff;
  width: 70%;
`;

const QuoteForm = ({ theme }) => {
  return (
    <Wrapper>
      <Container theme={theme}>
        <Wrap>
          <Text>An easy way to send requests to all suppliers</Text>
          <Text2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </Text2>
        </Wrap>
        <InquiryForm theme={theme} />
      </Container>
    </Wrapper>
  );
};

export default QuoteForm;
