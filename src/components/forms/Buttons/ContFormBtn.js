import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: ${({ bg }) => bg || "#fff"};
  align-items: center;
  gap: 20%;
  padding: 0.5rem 1rem;
  color: ${({ clr }) => clr || "#fff"};
  width: 100%;

  border-radius: 5px;
  box-shadow: 0px 0px 2px 1.5px rgba(32, 32, 32, 0.1);
  margin: 1rem 0;
  cursor: pointer;
`;
const Img = styled.img``;
const Text = styled.p``;
const ContFormBtn = ({ icon, title, bg, clr }) => {
  return (
    <Container bg={bg} clr={clr}>
      <Img src={icon} alt={title} />
      <Text> Continue with {title} </Text>
    </Container>
  );
};

export default ContFormBtn;
