import React from "react";
import styled from "styled-components";

import { Categories } from "../navbar/Navbar";

const Wrapper = styled.div`
  width: 98%;
  margin: 2rem auto;
  display: flex;
  justify-content: end;
  padding: 0 0.5rem;
  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;
const Content = styled.div`
  display: flex;
  gap: 1em;
`;
const Pages = styled.div`
  display: flex;
  border-radius: 4px;
`;
const PCategories = styled(Categories)`
  border: 1px solid #e3e8ee;
  background-color: #fff;
  border-radius: 4px;
  font-weight: bold;
`;
const Page = styled.p`
  border: 1px solid #e3e8ee;
  padding: 0.5rem 1rem;
  background-color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in;
  &.active {
    background-color: #eff2f4;
  }
  &:nth-child(2) {
    background-color: #eff2f4;
  }
  &:hover {
    background-color: #eff2f4;
  }
`;

const Pagination = ({ data, setAllProducts }) => {
  // const [perPage, setPerPage] = useState(2);
  // const pages = Math.floor(data.length / perPage);

  // const paginate = (items, page = 1, perPage) =>
  //   items.slice(perPage * (page - 1), perPage * page);
  return (
    <Wrapper>
      <Content>
        <PCategories>
          <option value="2">Show 2</option>
          <option value="3">Show 3</option>
          <option value="4">Show 4</option>
          <option value="5">Show 5</option>
        </PCategories>
        <Pages>
          <Page>
            <i className="fa-solid fa-chevron-left"></i>
          </Page>

          <Page>
            <i className="fa-solid fa-chevron-right"></i>
          </Page>
        </Pages>
      </Content>
    </Wrapper>
  );
};

export default Pagination;
