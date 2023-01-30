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

  &:nth-child(2) {
    background-color: #eff2f4;
  }
  &:hover {
    background-color: #eff2f4;
  }
`;

const Pagination = () => {
  return (
    <Wrapper>
      <Content>
        <PCategories>
          <option value="10">Show 10</option>
        </PCategories>
        <Pages>
          <Page>
            <i class="fa-solid fa-chevron-left"></i>
          </Page>
          <Page>1</Page>
          <Page>2</Page>
          <Page>3</Page>
          <Page>
            <i class="fa-solid fa-chevron-right"></i>
          </Page>
        </Pages>
      </Content>
    </Wrapper>
  );
};

export default Pagination;
