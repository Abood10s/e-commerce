import React from "react";
import styled from "styled-components";

const Cont = styled.div`
  background-color: ${({ bg }) => bg};
  padding: 1em;
  color: #fff;
  margin: 1rem 0;
  border-radius: 7px;
`;

const ColoredDiv = ({ bg, txt }) => {
  return <Cont bg={bg}>{txt}</Cont>;
};

export default ColoredDiv;
