import React from "react";
import styled from "styled-components";
import TheLogo from "../../../assets/thelogo.png";
import profile from "../../../assets/navicons/nav1.png";
import order from "../../../assets/navicons/nav2.png";
import msg from "../../../assets/navicons/nav3.png";
import cart from "../../../assets/navicons/nav4.png";
import menu from "../../../assets/navicons/menu.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 1px 1px rgba(32, 32, 32, 0.1);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  padding: 1rem 0;
`;
const Logo = styled.img`
  height: 45px;
`;
const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;
export const Icon = styled.img`
  height: 17px;
  width: 17px;
  cursor: pointer;
`;
const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-left: 0.5rem;
`;
const SearchWrap = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #0d6efd;
`;
export const Text = styled.p`
  color: #8b96a5;
  font-weight: 550;
  cursor: pointer;
`;
const Search = styled.input`
  padding: 0 0.5rem;
  outline: none;
  border: 1px solid #0d6efd;
  width: 350px;
`;
export const Categories = styled.select`
  border: 1px solid #0d6efd;
  padding: 0.1rem 0.5rem;
  outline: none;
  cursor: pointer;
`;
export const SearchBtn = styled.button`
  background-color: #0d6efd;
  color: #fff;
  border: none;
  padding: 0 1.5em;
  font-weight: bold;
  cursor: pointer;
`;
const SWrapper = styled(Wrapper)``;
const SCategories = styled(Categories)`
  border: none;
`;
const Flex1 = styled.div`
  display: flex;
`;
const Flex2 = styled.div``;

const list = ["Hot offers", "Gift boxes", "Projects", "Menu item"];
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={TheLogo} alt="brand logo" />

        <SearchWrap>
          <Search placeholder="Search" />
          <Categories>
            <option value="All Categoreis">All Categoreis</option>
          </Categories>
          <SearchBtn>Search</SearchBtn>
        </SearchWrap>

        <Controls>
          <NavItem>
            <Icon src={profile} />
            <Text>Profile</Text>
          </NavItem>
          <NavItem>
            <Icon src={msg} />
            <Text>Message</Text>
          </NavItem>
          <NavItem>
            <Icon src={order} />
            <Text>Orders</Text>
          </NavItem>
          <Link style={{ textDecoration: "none" }} to="/cart">
            <NavItem>
              <Icon src={cart} />
              <Text>My cart</Text>
            </NavItem>
          </Link>
        </Controls>
      </Wrapper>
      <Container>
        <SWrapper>
          <Flex1>
            <Flex1>
              <Icon src={menu} />
              <Text>All category</Text>
            </Flex1>
            <Controls>
              {list.map((item) => (
                <Text key={item}>{item}</Text>
              ))}
            </Controls>
            <SCategories>
              <option value="All Categoreis">All Categoreis</option>
            </SCategories>
          </Flex1>

          <Flex2>
            <SCategories>
              <option value="English">English, USD</option>
            </SCategories>
            <SCategories>
              <option value="Germany">Ship to ⚡</option>
            </SCategories>
          </Flex2>
        </SWrapper>
      </Container>
    </Container>
  );
};

export default Navbar;
