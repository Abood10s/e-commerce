import React from "react";

import TechStoredata from "../../MockData/TechStoredata";
import RecomCard from "../Cards/RecomCard";
import { Wrapper } from "../recommendgrid/RecomGrid";

const sliced = TechStoredata.slice(0, 5);

const RelatedPRoducts = ({ theme }) => {
  return (
    <Wrapper theme={theme}>
      {sliced.map((item) => {
        const { image, title, price, id } = item;
        return (
          <RecomCard
            key={id}
            img={image}
            price={price}
            body={title}
            theme={theme}
          />
        );
      })}
    </Wrapper>
  );
};

export default RelatedPRoducts;
