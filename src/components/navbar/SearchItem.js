import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductImg } from "./Navbar";
const Cont = styled.div`
  width: 100%;
  border-bottom: 2px solid #8e9ab188;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease-in;
  &:hover {
    background-color: #eae9e9c5;
  }
`;
const SearchItem = ({ search, children, item, setSuggess }) => {
  return (
    <Cont>
      <ProductImg src={item.img || item.image} alt={item.title} />
      <Link
        to={`/store/${children || search}`}
        style={{
          textDecoration: "none",
        }}
        onClick={() => setSuggess(true)}
      >
        {children}
      </Link>
    </Cont>
  );
};

export default SearchItem;
