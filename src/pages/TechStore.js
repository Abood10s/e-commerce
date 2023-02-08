import React from "react";
import styled from "styled-components";

import rating5 from "../components/Accordions/rating1.png";
import rating4 from "../components/Accordions/rating2.png";
import rating3 from "../components/Accordions/rating3.png";
import rating2 from "../components/Accordions/rating4.png";

import Accordion from "../components/Accordions/Accordion";
import CategoryAcc from "../components/Accordions/CategoryAcc";
import RatingAcc from "../components/Accordions/RatingAcc";
import TechCard from "../components/Cards/TechCard";
import TechStoredata from "../TechStoredata";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import StoreNav from "../components/storenavbar/StoreNav";
import Pagination from "../components/pagination/Pagination";

const Wrapper = styled.div`
  width: 80%;
  margin: 2rem auto;
`;
const StoreWrapper = styled.div`
  display: grid;
  grid-template-columns: 230px 3fr;
  gap: 1em;
  width: 100%;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Accordions = styled.div`
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const ProductsWrapper = styled.div`
  margin: 1rem auto;
`;

const categories = [
  "Mobile accessory",
  "Electronics",
  "Smartphones",
  "Modern tech",
];
const brands = ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"];
const condition = ["Any", "Refurbished", "Brand new ", "Old items"];
const Features = [
  "Metallic",
  "Plastic cover",
  "8GB Ram",
  "Super power",
  "Large Memory",
];
const ratings = [rating5, rating4, rating3, rating2];
const TechStore = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <StoreWrapper>
          <Accordions>
            <CategoryAcc title="categories" data={categories} />
            <Accordion title="brands" data={brands} type="checkbox" />
            <Accordion title="Features" data={Features} type="checkbox" />
            <Accordion title="Condition" data={condition} type="radio" />
            <RatingAcc title="Ratings" data={ratings} />
          </Accordions>
          <ProductsWrapper>
            <StoreNav />
            {TechStoredata.map((item) => {
              return <TechCard item={item} key={item.id} />;
            })}
            <Pagination />
          </ProductsWrapper>
        </StoreWrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

export default TechStore;
