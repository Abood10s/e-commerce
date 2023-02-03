import React from "react";
import styled from "styled-components";
import OfferCard from "../Cards/OfferCard";
import { P } from "../herogrid/HeroGrid";
import Time from "../time/Time";

import i1 from "./11.png";
import i2 from "./22.png";
import i3 from "./33.png";
import i4 from "./44.png";
import i5 from "./55.png";

const items = [
  { img: i1, cat: "Smart watches", disc: "-25%" },
  { img: i2, cat: "Laptops", disc: "-15%" },
  { img: i3, cat: "GoPro cameras", disc: "-40%" },
  { img: i4, cat: "Headphones", disc: "-25%" },
  { img: i5, cat: "Canon camreras", disc: "-25%" },
];
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 280px 3fr;
  background-color: #fff;
  width: 80%;
  margin: 2rem auto;
  border: 1px solid #e3e8ee;
  border-radius: 4px;
  @media (max-width: 1290px) {
    grid-template-columns: 3fr;
    width: 40%;
  }
  @media (max-width: 800px) {
    grid-template-columns: 3fr;
    width: 70%;
  }
`;

const Offer = styled.div`
  padding: 1em;
  border: 1px solid #e3e8ee;
`;
const Container = styled.div`
  display: flex;
  @media (max-width: 1290px) {
    flex-direction: column;
  }
`;
const Timing = styled.div`
  display: flex;
  gap: 0.2rem;
  margin: 0.5rem 0;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
const Offers = () => {
  return (
    <Wrapper>
      <Offer>
        <Text>
          <h3>Deals and offers</h3>
          <p>Hygiene equipments</p>
        </Text>
        <Timing>
          <Time number="04" time="days" />
          <Time number="13" time="Hour" />
          <Time number="34" time="Min" />
          <Time number="56" time="Sec" />
        </Timing>
      </Offer>
      <Container>
        {items.map((item) => {
          const { img, cat, disc } = item;
          return <OfferCard key={item.cat} img={img} cat={cat} disc={disc} />;
        })}
      </Container>
    </Wrapper>
  );
};

export default Offers;
