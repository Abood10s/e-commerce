import React from "react";
import styled from "styled-components";
import { Icon } from "../navbar/Navbar";

const Cont = styled.button`
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  color: #0d6efd;
  border: 1px solid #e3e8ee;
  border-radius: 5px;
  font-weight: bold;
  background-color: #fff;
  cursor: pointer;
  transition: 0.2s ease-out;
  &:hover {
    background-color: #0d6efd;
    color: #fff;
  }
`;
const CartMBtn = ({ title, icon }) => {
  return (
    <Cont>
      {icon && (
        <span>
          <Icon src={icon || ""} />
        </span>
      )}

      <span>{title || "Save for later"}</span>
    </Cont>
  );
};

export default CartMBtn;
