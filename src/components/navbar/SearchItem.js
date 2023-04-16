import React from "react";
import { Link } from "react-router-dom";
import { ProductImg } from "./Navbar";

const SearchItem = ({ search, children, item }) => {
  return (
    <div
      style={{
        width: "100%",
        borderBottom: "1px solid #abacae",
        padding: "0.5rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <ProductImg src={item.img || item.image} alt={item.title} />
      <Link
        to={`/store/${children || search}`}
        style={{
          textDecoration: "none",
        }}
      >
        {children}
      </Link>
    </div>
  );
};

export default SearchItem;
