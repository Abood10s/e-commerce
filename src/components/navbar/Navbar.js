import React, { useContext } from "react";
import styled from "styled-components";
import TheLogo from "../../assets/form icons/thelogo.png";
import profile from "../../assets/navicons/nav1.png";
import order from "../../assets/navicons/nav2.png";
import msg from "../../assets/navicons/nav3.png";
import cartIcon from "../../assets/navicons/nav4.png";
import { AuthCtx } from "../../CartContext/AuthContext";
import { CartCtx } from "../../CartContext/CartContext";

import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  box-shadow: 0px 0px 1px 1px rgba(32, 32, 32, 0.1);
  overflow-x: auto;
  background-color: #fff;

  background-color: ${(props) => props.theme.primaryClr};
  color: ${(props) => props.theme.secondaryClr};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  margin-bottom: 1rem;
`;
const SContainer = styled.div`
  width: 100%;
  box-shadow: 0px 0px 1px 1px rgba(32, 32, 32, 0.1);
  overflow-x: auto;
  background-color: ${(props) => props.theme.primaryClr};
  color: ${(props) => props.theme.secondaryClr};
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: auto;
  padding: 1rem 0;
  gap: 0.5rem;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0.8rem 0.5rem;
  }
`;
const Logo = styled.img`
  height: 45px;
  @media (max-width: 768px) {
    height: 35px;
  }
`;
const NavItem = styled.div`
  position: relative;
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
  @media (max-width: 768px) {
    &:nth-child(2) {
      display: none;
    }
  }
`;
const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-left: 0.5rem;
  @media (max-width: 768px) {
    gap: 0.4rem;
  }
`;
const SearchWrap = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #0d6efd;
  @media (max-width: 1100px) {
    display: none;
  }
`;
export const Text = styled.p`
  color: #8b96a5;
  font-weight: 550;
  cursor: pointer;
  display: inline-block;
`;
export const TText = styled.p`
  color: #8b96a5;
  font-weight: 550;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  @media (max-width: 1020px) {
    background-color: #eff2f4;
    border-radius: 5px;
    color: #0d6efd;
    padding: 0.2rem 0.6rem;
  }
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
const SWrapper = styled(Wrapper)`
  overflow-x: auto;
  width: 80%;
  background-color: ${(props) => props.theme.primaryClr};
  color: ${(props) => props.theme.secondaryClr};
  gap: 3em;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.8rem 0.5rem;
  }
`;
const SCategories = styled(Categories)`
  border: none;
`;
const Flex1 = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  @media (max-width: 1020px) {
    gap: 0.2rem;
  }
`;
const Flex2 = styled.div`
  display: flex;
  gap: 1em;
`;
const LogOutBtn = styled.button`
  background-color: #123;
  color: #fff;
  padding: 0.5rem 1rem;
  height: fit-content;
  cursor: pointer;
  border-radius: 4px;
  border: none;
`;
const Badge = styled.div`
  position: absolute;
  top: -12px;
  right: -13px;
  background-color: rgba(35, 152, 138, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  padding: 0.1rem 0.1rem;
`;
const ThemeBtn = styled.button`
  padding: 0.3rem 1rem;
  background-color: #123;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  border: none;
`;
const list = ["Hot offers", "Gift boxes", "Projects", "Menu item"];

const Navbar = ({ theme, handleDarkMode }) => {
  const name = localStorage.getItem("name");
  const { logout, isAuth } = useContext(AuthCtx);
  const { cart } = useContext(CartCtx);

  return (
    <Container theme={theme}>
      <Wrapper>
        <Link to="/">
          <Logo src={TheLogo} alt="brand logo" />
        </Link>

        <SearchWrap>
          <Search placeholder="Search" />
          <Categories>
            <option value="All">All Categories</option>
          </Categories>
          <SearchBtn>Search</SearchBtn>
        </SearchWrap>

        <Controls>
          <NavItem>
            <Icon src={profile} />
            <Text>{name}</Text>
          </NavItem>
          <NavItem>
            <Icon src={msg} />
            <Text>Message</Text>
          </NavItem>
          <Link to="/product" style={{ textDecoration: "none" }}>
            <NavItem>
              <Icon src={order} />
              <Text>Orders</Text>
            </NavItem>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/cart">
            <NavItem>
              <Badge>{cart.length}</Badge>
              <Icon src={cartIcon} />
              <Text>Cart</Text>
            </NavItem>
          </Link>
        </Controls>
        {isAuth && (
          <LogOutBtn type="button" onClick={logout}>
            Log out
          </LogOutBtn>
        )}
      </Wrapper>
      <SContainer theme={theme}>
        <SWrapper>
          <Flex1>
            <Flex1>
              {/* <Icon src={menu} /> */}
              <TText>All category</TText>
            </Flex1>
            <Controls>
              {list.map((item) => (
                <TText key={item}>{item}</TText>
              ))}
            </Controls>
            <SCategories>
              <option value="All Categoreis">All Categoreis</option>
            </SCategories>
            <ThemeBtn onClick={handleDarkMode}>Toggle Theme</ThemeBtn>
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
      </SContainer>
    </Container>
  );
};

export default Navbar;
