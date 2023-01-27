import React from "react";
import styled from "styled-components";

const Button = styled.h4`
  background-color: ${({ bg }) => bg};
  color: ${({ clr }) => clr};
  padding: 0.8em;
  border: none;
  cursor: pointer;
  border-radius: 7px;
  text-align: center;
`;

const BannerBtn = ({ bg, clr, txt }) => {
  return (
    <Button bg={bg} clr={clr}>
      {txt}
    </Button>
  );
};

export default BannerBtn;
