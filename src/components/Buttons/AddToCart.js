import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CartCtx } from "../../Contexts/CartContext";
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
export const Green = styled(Blue)`
  color: #00b517;
  font-size: 16px;
`;
const RedTxt = styled.p`
  color: #fa3434;
`;
const AddToCart = ({ theItem }) => {
  const [added, setAdded] = useState(false);
  const { cart, setCart } = useContext(CartCtx);
  const itemExists = theItem && cart.some((item) => item.id === theItem.id);
  return (
    <AddToCartBtn added={added}>
      {!added ? (
        <div
          onClick={() => {
            if (!itemExists) {
              setCart([...cart, theItem]);
              setAdded(true);
            }
          }}
        >
          <i className="fa-solid fa-cart-shopping"></i>
          Move to Cart
        </div>
      ) : (
        <RedTxt
          onClick={() => {
            const index = cart.findIndex((item) => item.id === theItem.id);
            if (index !== -1) {
              const newCart = [...cart];
              newCart.splice(index, 1);
              setCart(newCart);
              setAdded(false);
            }
          }}
        >
          remove from cart
        </RedTxt>
      )}
    </AddToCartBtn>
  );
};

export default AddToCart;
