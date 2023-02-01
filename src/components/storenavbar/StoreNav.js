import React from "react";
import styled from "styled-components";

import { CheckBox, Input, InputLabel } from "../forms/LoginForm";
import { Categories } from "../navbar/Navbar";
import { Icon } from "../navbar/Navbar";

import list from "./list.png";
import grid from "./grid.png";

const Wrapper = styled.div`
  margin: 1rem auto;
  border: 1px solid #e3e8ee;
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0 1em;
  width: 97%;
`;
const Icons = styled.div`
  display: flex;
  gap: 0.2rem;
  border: 2px solid #e3e8ee;
  border-radius: 4px;
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
const StoreNav = () => {
  return (
    <Wrapper>
      <div>
        <p>12,911 items</p>
      </div>
      <Flex>
        <div>
          <CheckBox>
            <Input type="checkbox" name="check" id="check" checked />
            <InputLabel htmlFor="check">Remember me</InputLabel>
          </CheckBox>
        </div>
        <div>
          <CCategories>
            <option value="All Categoreis">All Categoreis</option>
          </CCategories>
        </div>
        <Icons>
          <Icon src={grid} />
          <Icon src={list} />
        </Icons>
      </Flex>
    </Wrapper>
  );
};

export default StoreNav;
