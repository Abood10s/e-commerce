import React, { useState } from "react";
import styled from "styled-components";

import BannerBtn from "../homeSection/BannerBtn";
import { Green } from "../checkcoupon/Bill";

import i1 from "../../assets/singleproduct/1.png";
import i2 from "../../assets/singleproduct/2.png";
import i3 from "../../assets/singleproduct/3.png";
import i4 from "../../assets/singleproduct/4.png";
import i5 from "../../assets/singleproduct/5.png";
import i6 from "../../assets/singleproduct/6.png";
import i7 from "../../assets/singleproduct/7.png";
import rect from "../../assets/singleproduct/rect.png";
import flag from "../../assets/singleproduct/flag.png";
import globe from "../../assets/singleproduct/globe.png";
import sheild from "../../assets/singleproduct/sheild.png";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import Tabs from "../Tabs/Tabs";
import Discount from "../discount/Discount";
import RelatedPRoducts from "../RelatedPRoducts/RelatedPRoducts";
import Heading from "../heading/Heading";

const images = [i2, i3, i4, i5, i6, i7];

const Wrapper = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  align-item1s: start;
  border: 1px solid #e3e8ee;
  border-radius: 5px;
  background-color: #fff;
  padding: 1rem;
  gap: 0.5rem;
  @media (max-width: 1500px) {
    flex-direction: column;
    width: 60%;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    width: 90%;
    margin: 0.5rem auto;
  }
`;
const Cont1 = styled.div`
  display: flex;
  flex-direction: column;
`;
const Cont2 = styled.div`
  display: flex;
  flex-direction: column;
`;
const Cont3 = styled.div`
  border: 1px solid #e3e8ee;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0px 0px 1px 1px rgba(56, 56, 56, 0.08);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: fit-content;
`;
const MainImg = styled.div``;
const Img = styled.img`
  border: 1px solid #e3e8ee;
  border-radius: 5px;
  cursor: pointer;
  margin: 0.5rem 0;
`;
const BigImg = styled.img`
  display: block;
  border: 1px solid #e3e8ee;
  border-radius: 5px;
  cursor: pointer;
  height: 345px;
  width: 345px;
  object-fit: cover;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 225px;
  }
`;
const Flex = styled.div`
  display: flex;
  align-item1s: center;
  gap: 0.5rem;
  border-bottom: 1px solid #e3e8ee;
  padding: 0.5rem;
`;
const Smallimages = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
  align-item1s: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 70%;
  }
`;
const Flex2 = styled.div`
  display: flex;
  align-item1s: center;
  gap: 0.5rem;
  padding: 0.5rem 0.7rem;
`;
const IImg = styled.img``;
const GGreen = styled(Green)`
  display: flex;
  align-item1s: center;
  justify-content: start;
  gap: 0.2rem;
`;
const Prices = styled.div`
  background-color: #fff0df;
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin: 0.5rem 0;
  @media (max-width: 900px) {
    width: 100%;
    gap: 1rem;
    flex-direction: column;
  }
`;
const Comp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-right: 2px solid #bdc1c8;
  padding-right: 0.5rem;
  @media (max-width: 900px) {
    width: 100%;
    gap: 0.2rem;
  }
`;
const TableItem1 = styled.div`
  padding: 0.5rem 0;
  &:nth-child(1),
  :nth-child(4),
  :nth-child(7) {
    border-bottom: 1px solid #e3e8ee;
  }
`;
const Item1 = styled.p`
  display: inline-block;
  width: 30%;
  color: #8b96a5;
  @media (max-width: 700px) {
    width: 50%;
    gap: 0.2rem;
  }
`;
const Item2 = styled.p`
  display: inline-block;
  width: 30%;
  color: #000;
`;
const SingleProduct = () => {
  const [img, setImg] = useState(i1);
  return (
    <>
      <Navbar />
      <Wrapper>
        <Cont1>
          <MainImg>
            <BigImg src={img} alt="main T-shirt" />
          </MainImg>
          <Smallimages>
            {images.map((img, index) => {
              return (
                <Img
                  key={index}
                  src={img}
                  alt="main T-shirt"
                  onClick={() => setImg(img)}
                />
              );
            })}
          </Smallimages>
        </Cont1>
        <Cont2>
          <GGreen>
            <i class="fa-solid fa-check"></i> In stock
          </GGreen>
          <h2>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h2>

          <Prices>
            <Comp>
              <h2 style={{ color: "red" }}>$98.00</h2>

              <p>50-100 pcs</p>
            </Comp>
            <Comp>
              <h2>$90.00</h2>
              <p>100-700 pcs</p>
            </Comp>
            <Comp>
              <h2>$78.00</h2>
              <p>700+ pcs</p>
            </Comp>
          </Prices>
          <TableItem1>
            <Item1>Price: </Item1>
            <Item2>Negotiable</Item2>
          </TableItem1>
          <TableItem1>
            <Item1>Type: </Item1>
            <Item2>Classic shoes</Item2>
          </TableItem1>
          <TableItem1>
            <Item1>Material: </Item1>
            <Item2>Plastic material</Item2>
          </TableItem1>
          <TableItem1>
            <Item1>Design: </Item1>
            <Item2>Modern nice</Item2>
          </TableItem1>
          <TableItem1>
            <Item1>Customization: </Item1>
            <Item2>Customized logo and design</Item2>
          </TableItem1>
          <TableItem1>
            <Item1>Protection: </Item1>
            <Item2>Refund Policy</Item2>
          </TableItem1>
          <TableItem1>
            <Item1>Warranty: </Item1>
            <Item2>2 years full warranty </Item2>
          </TableItem1>
        </Cont2>
        <Cont3>
          <Flex>
            <IImg src={rect} />
            <h4>Guanjoi Trading LLC</h4>
          </Flex>
          <Flex2>
            <IImg src={flag} />
            <p>Germany, Berlin</p>
          </Flex2>
          <Flex2>
            <IImg src={sheild} />
            <p>Verified Seller</p>
          </Flex2>
          <Flex2>
            <IImg src={globe} />
            <p>Worldwide shipping</p>
          </Flex2>
          <BannerBtn bg="#0D6EFD" clr="#FFFFFF" txt="Send inquiry" />
          <BannerBtn bg="#FFFFFF" clr="#0D6EFD" txt="Seller’s profile" />
        </Cont3>
      </Wrapper>
      <Tabs />
      <Heading title="Related products" />
      <RelatedPRoducts />
      <Discount />
      <Footer />
    </>
  );
};

export default SingleProduct;
