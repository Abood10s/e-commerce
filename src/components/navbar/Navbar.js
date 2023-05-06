import React, { useContext, useState } from "react";
import styled from "styled-components";
import TheLogo from "../../assets/form icons/thelogo.png";
import profile from "../../assets/navicons/nav1.png";
import order from "../../assets/navicons/nav2.png";
import msg from "../../assets/navicons/nav3.png";
import cartIcon from "../../assets/navicons/nav4.png";
import { AuthCtx } from "../../Contexts/AuthContext";
import { CartCtx } from "../../Contexts/CartContext";

import { Link } from "react-router-dom";
import { SearchData } from "../../MockData/SearchData";
import SearchItem from "./SearchItem";
import MobileNav from "./MobileNav";

const Container = styled.div`
  position: relative;
  width: 100%;
  box-shadow: 0px 0px 1px 1px rgba(32, 32, 32, 0.1);
  overflow: hidden;
  background-color: #fff;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
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
  @media (max-width: 968px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;
  margin: auto;
  padding: 1rem;
  gap: 0.5rem;
  @media (max-width: 908px) {
    width: 100%;
    padding: 0.8rem 0.5rem;
    flex-direction: column;
  }
`;
const Logo = styled.img`
  height: 45px;
  @media (max-width: 768px) {
    height: 35px;
  }
`;
export const NavItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "center"};
  width: ${(props) => props.width || "auto"};

  align-items: center;
  gap: 0.2rem;
  @media (max-width: 768px) {
    &:nth-of-type(2) {
      display: none;
    }
  }
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
  @media (max-width: 950px) {
    margin-top: 0.5rem;
  }
  @media (max-width: 910px) {
    display: none;
  }
`;
const SearchWrap = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  border: 2px solid #0d6efd;
  width: fit-content;
  position: relative;

  @media (max-width: 910px) {
    width: fit-content;
  }
  @media (max-width: 550px) {
    width: auto;
  }
`;
export const Text = styled.p`
  color: #8b96a5;
  font-weight: bold;
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
  @media (max-width: 1200px) {
    display: none;
  }
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
export const LogOutBtn = styled.button`
  background-color: #123;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.5rem;
  height: fit-content;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  @media (max-width: 1020px) {
    display: none;
  }
`;
export const Badge = styled.div`
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

export const Logout = styled.p`
  font-weight: bold;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Suggestions = styled.div`
  position: fixed;
  top: 70px;
  left: 52%;
  right: 0;
  border-radius: 5px;
  overflow-y: scroll;
  transition: all ease-in 0.1s;
  background-color: #fff;
  max-height: 250px;
  width: 35%;
  transform: translateX(-50%);
  height: fit-content;
  z-index: 98989998989;
  border: 1px solid #2424243b;

  @media (min-width: 1590px) {
    transform: translateX(-50%);
    left: 53.5%;
    width: 35%;
  }

  @media (max-width: 1020px) {
    transform: translateX(-50%);
    left: 50%;
    width: 55%;
  }
  @media (max-width: 890px) {
    transform: translateX(-50%);
    top: 110px;
    width: 85%;
  }
`;
const Menu = styled.i`
  cursor: pointer;
  @media (min-width: 910px) {
    display: none;
  }
`;
const CloseMenu = styled.i`
  cursor: pointer;
  @media (min-width: 910px) {
    display: none;
  }
`;
export const ProductImg = styled.img`
  height: 35px;
  width: 35px;
  object-fit: cover;
`;
const list = ["Hot offers", "Gift boxes", "Projects", "Menu item"];

const Navbar = ({ theme }) => {
  const name = localStorage.getItem("name");
  const { logout, isAuth } = useContext(AuthCtx);
  const { cart } = useContext(CartCtx);
  const [query, setQuery] = useState("");
  const [clicked, setClicked] = useState(false);
  const [suggess, setSuggess] = useState(false);

  const [searchedData, setSearchedData] = useState(null);

  const findSuggestions = (query) => {
    let suggestedData = SearchData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchedData(suggestedData);
  };

  return (
    <Container theme={theme}>
      <Wrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <Logo src={TheLogo} alt="brand logo" />
          </Link>
          {clicked ? (
            <CloseMenu
              className="fa-solid fa-x"
              onClick={() => setClicked(false)}
              style={{ fontSize: "19px" }}
            ></CloseMenu>
          ) : (
            <Menu
              className="fa-solid fa-bars"
              onClick={() => setClicked(true)}
              style={{ fontSize: "19px" }}
            ></Menu>
          )}
        </div>
        <SearchWrap>
          <Search
            placeholder="Search"
            onChange={(e) => {
              setQuery(e.target.value);
              findSuggestions(e.target.value);
            }}
            value={query}
          />
          <Categories>
            <option value="All">All Categories</option>
          </Categories>
          {!query ? (
            <p
              style={{
                textDecoration: "none",
                alignSelf: "center",
                padding: "0.6rem",
                backgroundColor: "#0d6efd",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Search
            </p>
          ) : (
            <Link
              className="search-link"
              to={`/store/${query}`}
              style={{
                textDecoration: "none",
                alignSelf: "center",
                padding: "0.6rem",
                backgroundColor: "#0d6efd",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Search
            </Link>
          )}
          {query && !suggess && (
            <Suggestions className={query && "active"}>
              {searchedData.length !== 0 ? (
                searchedData.map((item) => {
                  return (
                    <SearchItem search={query} key={item.id} item={item}>
                      {item.title}
                    </SearchItem>
                  );
                })
              ) : (
                <h3
                  style={{
                    textAlign: "center",
                    padding: "1rem",
                  }}
                >
                  Sorry no results were found on{" "}
                  <span style={{ color: "#0D6EFD" }}>"{query}"</span>
                </h3>
              )}
            </Suggestions>
          )}
        </SearchWrap>

        <MobileNav show={clicked ? true : false} theme={theme} />
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
              <Icon src={cartIcon} />
              <Badge>{cart.length}</Badge>
              <Text>Cart</Text>
            </NavItem>
          </Link>
        </Controls>
        <div style={{ margin: "0 1.5rem" }}>
          {isAuth && (
            <LogOutBtn type="button" onClick={logout}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
            </LogOutBtn>
          )}
        </div>
      </Wrapper>
      <SContainer theme={theme}>
        <SWrapper>
          <Flex1>
            <Flex1>
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
