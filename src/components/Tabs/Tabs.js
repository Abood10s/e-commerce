import React from "react";
import styled from "styled-components";
import { Wrapper, Container1, Container2 } from "../../pages/Cart";

import img1 from "../../assets/Singleproductimgs/1.png";
import img2 from "../../assets/Singleproductimgs/2.png";
import img3 from "../../assets/Singleproductimgs/3.png";
import img4 from "../../assets/Singleproductimgs/4.png";
import img5 from "../../assets/Singleproductimgs/5.png";
import LikeCard from "../Cards/LikeCard";

const items = [
  {
    img: img1,
    title: "Apple Watch Series Space Gray",
    price: "$7.00 - $99.50",
  },
  {
    img: img2,
    title: "Apple Watch Series Space Gray",
    price: "$7.00 - $99.50",
  },
  {
    img: img3,
    title: "Apple Watch Series Space Gray",
    price: "$7.00 - $99.50",
  },
  {
    img: img4,
    title: "Apple Watch Series Space Gray",
    price: "$7.00 - $99.50",
  },
  {
    img: img5,
    title: "Apple Watch Series Space Gray",
    price: "$7.00 - $99.50",
  },
];

const CContainer2 = styled(Container2)`
  background-color: #fff;
  border-radius: 4px;
  padding: 1rem;
  border: 1px solid #e3e8ee;
`;
const Tabss = styled.div`
  display: flex;
  gap: 1rem;
  color: #8b96a5;
  border-bottom: 1px solid #e3e8ee;
`;
const P = styled.p`
  padding: 0.5rem 0;
  cursor: pointer;
  &:nth-child(1) {
    color: #0d6efd;
    border-bottom: 2px solid #0d6efd;
    font-weight: bold;
  }
`;
const Body = styled.div`
  margin: 1rem 0;
`;
const Txt = styled.p`
  display: flex;
  align-items: center;
  color: #505050;
  gap: 0.5rem;
`;
const Tabs = () => {
  return (
    <Wrapper>
      <Container1>
        <Tabss>
          <P>Description</P>
          <P>Reviews</P>
          <P>Shipping</P>
          <P>About company</P>
        </Tabss>
        <Body>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div></div>
          <div>
            <Txt>
              <i class="fa-sharp fa-solid fa-check"></i>
              <p>Some great feature name here</p>
            </Txt>
            <Txt>
              <i class="fa-sharp fa-solid fa-check"></i>
              <p>Lorem ipsum dolor sit amet, consectetur </p>
            </Txt>
            <Txt>
              <i class="fa-sharp fa-solid fa-check"></i>
              <p>Duis aute irure dolor in reprehenderit</p>
            </Txt>
            <Txt>
              <i class="fa-sharp fa-solid fa-check"></i>
              <p>Some great feature name here</p>
            </Txt>
          </div>
        </Body>
      </Container1>
      <CContainer2>
        <h4>You may like</h4>
        {items.map((item) => {
          return <LikeCard item={item} key={item} />;
        })}
      </CContainer2>
    </Wrapper>
  );
};

export default Tabs;
