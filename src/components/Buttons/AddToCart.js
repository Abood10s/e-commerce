import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CartCtx } from "../../CartContext/CartContext";
import { Blue } from "../Accordions/Accordion";

const AddToCartBtn = styled.button`
  width: fit-content;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  color: #0d6efd;
  background-color: #fff;
  border: none;
  border: ${({ added }) => (added ? "" : "1px solid #e3e8ee")};
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s ease;
  font-weight: bold;
  &:hover {
    background-color: ${({ added }) => (!added ? "#0d6efd" : "#fff")};
    color: ${({ added }) => (!added ? "#fff" : "green")};
    gap: 0.7rem;
  }
`;
const Green = styled(Blue)`
  color: #00b517;
  font-size: 16px;
`;
const AddToCart = ({ item }) => {
  const [added, setAdded] = useState(false);
  const { cart, setCart } = useContext(CartCtx);
  return (
    <AddToCartBtn added={added}>
      {!added ? (
        <div
          onClick={() => {
            setCart([...cart, item]);
            setAdded(true);
          }}
        >
          <i className="fa-solid fa-cart-shopping"></i>
          Move to Cart
        </div>
      ) : (
        <Green>
          Added To cart <i class="fa-solid fa-check"></i>
        </Green>
      )}
    </AddToCartBtn>
  );
};

export default AddToCart;
