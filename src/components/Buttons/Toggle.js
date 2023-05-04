import React from "react";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

import styled from "styled-components";
const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.toggleBorder};
  position: fixed;
  bottom: 5%;
  right: 2%;
  border-radius: 10px;
  z-index: 999887799;
  cursor: pointer;
  font-size: 28px;
  display: grid;
  place-items: center;
  padding: 0.5rem;
`;
const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? <CiLight /> : <CiDark />}
    </Button>
  );
};

export default Toggle;
