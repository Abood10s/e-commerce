import React from "react";
import styled from "styled-components";
const Card = styled.div`
  border: 1px solid #e0e0e0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  padding: 0.7em 0.9em;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;
const Img = styled.img`
  height: 180px;
  width: 170px;
  margin: auto;
`;
const RecomCard = ({ img, price, body, theme }) => {
  return (
    <Card theme={theme}>
      <Img src={img} />
      <h4>${price}</h4>
      <p>{body}</p>
    </Card>
  );
};

export default RecomCard;
