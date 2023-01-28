import React from "react";
import styled from "styled-components";
import RecomCard from "../Cards/RecomCard";
import recommended from "../../Recommended";
const Wrapper = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1em;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;
const RecomGrid = ({ theme }) => {
  return (
    <Wrapper>
      {recommended.map((item) => {
        const { img, body, price } = item;
        return <RecomCard img={img} price={price} body={body} theme={theme} />;
      })}
    </Wrapper>
  );
};

export default RecomGrid;
