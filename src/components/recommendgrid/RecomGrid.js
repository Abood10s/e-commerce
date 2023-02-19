import React from "react";
import styled from "styled-components";
import RecomCard from "../Cards/RecomCard";
import recommended from "../../MockData/RecommData";
export const Wrapper = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1em;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;
const RecomGrid = ({ theme }) => {
  return (
    <Wrapper>
      {recommended.map((item, index) => {
        const { img, body, price } = item;
        return (
          <RecomCard
            img={img}
            price={price}
            body={body}
            theme={theme}
            key={index}
          />
        );
      })}
    </Wrapper>
  );
};

export default RecomGrid;
