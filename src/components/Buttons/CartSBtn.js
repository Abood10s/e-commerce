import React from "react";
import styled from "styled-components";
const Cont = styled.button`
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  color: #fa3434;
  border: 1px solid #e3e8ee;
  border-radius: 5px;
  font-weight: bold;
  background-color: #fff;
  cursor: pointer;
  transition: 0.2s ease-out;
  &:hover {
    background-color: #fa3434;
    color: #fff;
  }
`;
const CartSBtn = ({ title, icon }) => {
  return (
    <Cont>
      <span>{title || "Remove"}</span>
    </Cont>
  );
};

export default CartSBtn;
