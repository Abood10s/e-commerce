import React from "react";

import TechStoredata from "../../TechStoredata";
import RecomCard from "../Cards/RecomCard";
import { Wrapper } from "../recommendgrid/RecomGrid";

const sliced = TechStoredata.slice(0, 5);

const RelatedPRoducts = () => {
  return (
    <Wrapper>
      {sliced.map((item) => {
        const { image, title, price } = item;
        return <RecomCard img={image} price={price} body={title} />;
      })}
    </Wrapper>
  );
};

export default RelatedPRoducts;
