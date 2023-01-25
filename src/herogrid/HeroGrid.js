import React from "react";
import styled from "styled-components";
import HeroItem from "../components/HeroItem";
import herog1data from "../Herogrid1data";
import herog1 from "../assets/herogrid1/herog1.png";
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  margin: 2rem auto;
  border-radius: 5px;
  overflow: hidden;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex: 3;
`;
const HeroImg = styled.div`
  background: url(${({ himg }) => himg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 1em 1em;
  width: fit-content;
  flex: 0.8;
`;
const P = styled.p`
  color: #000;
  font-weight: bold;
  margin: 1rem 0;
`;
const Button = styled.button`
  background-color: #fff;
  color: #000;
  padding: 0.5rem 2em;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
`;

const HeroGrid = ({ himg, data }) => {
  return (
    <Wrapper>
      <HeroImg himg={himg}>
        <P>Home and outdoor</P>
        <Button>Source now</Button>
      </HeroImg>
      <Container>
        {data.map((item) => {
          const { image, title, price } = item;
          return <HeroItem img={image} title={title} price={price} />;
        })}
      </Container>
    </Wrapper>
  );
};

export default HeroGrid;
