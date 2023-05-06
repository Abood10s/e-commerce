import React from "react";
import styled from "styled-components";

import { CheckBox, Input, InputLabel } from "../forms/LoginForm";
import { Categories } from "../navbar/Navbar";
// import { Icon } from "../navbar/Navbar";

import list from "./list.png";
import grid from "./grid.png";
import techstoredata from "../../MockData/TechStoredata";

const Wrapper = styled.div`
  margin: 1rem auto;
  border: 1px solid #e3e8ee;
  border-radius: 4px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0 1em;
  width: 97%;
  &.active {
    background-color: red;
  }
  @media (max-width: 768px) {
    padding: 0;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e3e8ee;
  border-radius: 4px;
`;
const Icon = styled.img`
  padding: 0.4rem;
  border-left: 1px solid #e3e8ee;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: #e3e8ee;
  }
  &:nth-child(2) {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const CCategories = styled(Categories)`
  border: 1px solid #e3e8ee;
  border-radius: 5px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Flex = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
const StoreNav = ({ setIsList, itemsCount, isList, theme }) => {
  return (
    <Wrapper theme={theme}>
      <div>
        <p>{itemsCount || techstoredata.length} items found</p>
      </div>
      <Flex>
        <div>
          <CheckBox>
            <Input
              type="checkbox"
              name="check"
              id="check"
              defaultChecked={true}
            />
            <InputLabel htmlFor="check">Remember me</InputLabel>
          </CheckBox>
        </div>
        <div>
          <CCategories>
            <option value="All Categoreis">All Categoreis</option>
          </CCategories>
        </div>
        <Icons>
          <Icon
            src={grid}
            onClick={() => setIsList(false)}
            className={isList ? "" : "active"}
          />
          <Icon
            src={list}
            onClick={() => setIsList(true)}
            className={isList ? "active" : ""}
          />
        </Icons>
      </Flex>
    </Wrapper>
  );
};

export default StoreNav;
