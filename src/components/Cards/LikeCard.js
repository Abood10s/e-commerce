import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;
const Flex1 = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  width: 25%;
  display: flex;
  justify-content: center;
  padding: 0.2rem 0;
`;
const Flex2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const LikeCard = ({ item }) => {
  const { img, title, price } = item;
  return (
    <Wrap>
      <Flex1>
        <img src={img} alt="Like" />
      </Flex1>
      <Flex2>
        <h5>{title}</h5>
        <p>{price}</p>
      </Flex2>
    </Wrap>
  );
};

export default LikeCard;
