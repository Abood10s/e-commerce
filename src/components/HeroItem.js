import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const P = styled.p`
  font-size: 14px;
  color: #8b96a5;
  width: 30%;
`;
const Cont = styled.div`
  background-color: #fff;
  padding: 0.5rem;
  border: 1px solid #e0e0e0;
`;
const HeroItem = ({ img, title, price }) => {
  return (
    <Cont>
      <h5>{title}</h5>
      <Flex>
        <P>From USD {price}</P>
        <img src={img} alt="" />
      </Flex>
    </Cont>
  );
};

export default HeroItem;
