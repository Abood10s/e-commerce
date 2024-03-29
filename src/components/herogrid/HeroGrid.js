import React from "react";
import styled from "styled-components";
import HeroItem from "../HeroItem";

import { Link } from "react-router-dom";
export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  margin: 2rem auto;

  border-radius: 5px;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex: 3;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;
export const HeroImg = styled.div`
  background: url(${({ himg }) => himg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 1em;
  width: fit-content;
  flex: 0.8;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const P = styled.p`
  color: #000;
  font-weight: bold;
  margin: 1rem 0;
`;
export const Button = styled.button`
  background-color: #fff;
  color: #000;
  padding: 0.5rem 2em;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
`;

const HeroGrid = ({ himg, data, theme }) => {
  return (
    <Wrapper theme={theme}>
      <HeroImg himg={himg} alt="main">
        <P>Home and outdoor</P>
        <Link to="/store/all">
          <Button>Source now</Button>
        </Link>
      </HeroImg>
      <Container>
        {data.map((item) => {
          const { image, title, price } = item;
          return (
            <HeroItem
              img={image}
              title={title}
              price={price}
              theme={theme}
              key={image}
            />
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default HeroGrid;
