import React from "react";
import styled from "styled-components";

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: Center;
  justify-content: space-between;
  gap: 1rem;
  border: 1px solid #e3e8ee;
  padding: 1em;
  flex: 1;
  cursor: pointer;
  transition: 0.2s linear;
  &:hover {
    flex: 1.2;
    border: none;
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
