import React, { useEffect, useState } from "react";
import styled from "styled-components";

import rating5 from "../components/Accordions/rating1.png";
import rating4 from "../components/Accordions/rating2.png";
import rating3 from "../components/Accordions/rating3.png";
import rating2 from "../components/Accordions/rating4.png";

import TechCardGrid from "../components/Cards/TechCardGrid";
import TechCard from "../components/Cards/TechCard";
import Accordion from "../components/Accordions/Accordion";
import CategoryAcc from "../components/Accordions/CategoryAcc";
import RatingAcc from "../components/Accordions/RatingAcc";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import StoreNav from "../components/storenavbar/StoreNav";
import Pagination from "../components/pagination/Pagination";
import { useLocation, useParams } from "react-router-dom";
import { CategoryCtx } from "../Contexts/CategoryContext";
import { SearchData } from "../MockData/SearchData";
import techstoredata from "../MockData/TechStoredata";

export const Wrapper = styled.div`
  width: 80%;
  margin: 7rem auto;
`;
export const StoreWrapper = styled.div`
  display: grid;
  grid-template-columns: 230px 3fr;
  gap: 1em;
  width: 100%;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const Accordions = styled.div`
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const ProductsWrapper = styled.div`
  margin: 1rem auto;
  width: 100%;
`;
export const Tag = styled.p`
  background-color: #eff2f4;
  border-radius: 5px;
  color: #0d6efd;
  padding: 0.2rem 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
`;
export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;
export const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const categories = [
  "Mobile accessory",
  "Electronics",
  "Smartphones",
  "Modern tech",
];
export const brands = ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"];
export const condition = ["Any", "Refurbished", "Brand new ", "Old items"];
export const Features = [
  "Metallic",
  "Plastic cover",
  "8GB Ram",
  "Super power",
  "Large Memory",
];
export const ratings = [rating5, rating4, rating3, rating2];
const TechStore = () => {
  let location = useLocation();
  const [tags, setTags] = useState([]);
  const [isList, setIsList] = useState(true);
  const uniqueTags = [...new Set(tags)];
  const handleDeleteTag = (tag) => {
    setTags(tags.filter((thetag) => thetag !== tag));
  };
  const { query } = useParams();
  const [searched, setSearched] = useState([]);
  const getSearchedItems = (query) => {
    setSearched(
      SearchData.filter((item) =>
        item.title?.toLowerCase()?.includes(query.toLowerCase())
      )
    );
  };
  useEffect(() => {
    query && getSearchedItems(query);
  }, [query]);
  return (
    <>
      <Navbar />
      <Wrapper>
        {`Home > Clothings > Men’s wear > ${location.pathname}`}
        <Tags>
          {uniqueTags?.map((tag) => {
            return (
              <Tag onClick={() => handleDeleteTag(tag)}>
                {tag}
                <i class="fa-solid fa-x"></i>
              </Tag>
            );
          })}
        </Tags>
        <StoreWrapper>
          <CategoryCtx.Provider value={{ tags, setTags }}>
            <Accordions>
              <CategoryAcc title="categories" data={categories} />
              <Accordion
                title="brands"
                data={brands}
                type="checkbox"
                tags={tags}
                setTags={setTags}
              />
              <Accordion title="Features" data={Features} type="checkbox" />
              <Accordion title="Condition" data={condition} type="radio" />
              <RatingAcc title="Ratings" data={ratings} />
            </Accordions>
          </CategoryCtx.Provider>
          <ProductsWrapper>
            <StoreNav setIsList={setIsList} itemsCount={searched.length} />
            {searched.length === 0 && (
              <h2>Sorry there is no matching results for "{query}"</h2>
            )}
            {isList ? (
              (query ? searched : techstoredata).map((item) => {
                return <TechCard theItem={item} key={item.id} />;
              })
            ) : (
              <>
                <GridView>
                  {(query ? searched : techstoredata).map((item) => {
                    return <TechCardGrid theItem={item} key={item.id} />;
                  })}
                </GridView>
              </>
            )}
            {query === "all" &&
              techstoredata.map((item) => {
                return <TechCard theItem={item} key={item.id} />;
              })}
            {searched.length !== 0 && <Pagination />}
          </ProductsWrapper>
        </StoreWrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

export default TechStore;
