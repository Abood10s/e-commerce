import React from "react";
import styled from "styled-components";

const Cont = styled.div`
  background-color: #606060;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center
  gap: 0.2rem;
  padding: 0.5rem;
  color: #ffffff;
`;
const H = styled.h4`
  text-align: center;
`;
const Time = ({ number, time }) => {
  return (
    <Cont>
      <H>{number || "04"}</H>
      <p>{time || "Days"}</p>
    </Cont>
  );
};

export default Time;
