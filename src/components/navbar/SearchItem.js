import React from "react";
import { Link } from "react-router-dom";

const SearchItem = ({ search, children }) => {
  return (
    <div
      style={{
        width: "100%",
        borderBottom: "1px solid #abacae",
        padding: "0.5rem",
      }}
    >
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
