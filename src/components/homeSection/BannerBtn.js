import React from "react";
import { Link } from "react-router-dom";
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
    <Link to="/store/all" style={{ textDecoration: "none" }}>
      <Button bg={bg} clr={clr}>
        {txt}
      </Button>
    </Link>
  );
};

export default BannerBtn;
