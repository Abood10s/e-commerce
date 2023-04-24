import React from "react";
import styled from "styled-components";

const Cont = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: Center;
  justify-content: space-between;
  gap: 1rem;
  border: 1px solid #e3e8ee;
  padding: 1em;
  flex: 1;
  cursor: pointer;
  transition: all 0.2s linear;
  overflow: hidden;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    bottom: -100%;
    left: 0;
    right: 0;
    top: 100%;
    background-color: #9fe2bf;
    z-index: -1;
    transition: all 0.3s linear;
  }
  &:hover::after {
    bottom: 0;
    top: 0;
  }
`;
const Disc = styled.div`
  background-color: #ffe3e3;
  color: #eb001b;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: fit-content;
  padding: 0.4em 0.6em;
  font-weight: bold;
`;

const OfferCard = ({ img, cat, disc }) => {
  return (
    <Cont>
      <img src={img} alt={cat} />
      <h5>{cat}</h5>
      <Disc>{disc}</Disc>
    </Cont>
  );
};

export default OfferCard;
