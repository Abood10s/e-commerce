import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthCtx } from "../../Contexts/AuthContext";
import { Icon, Text } from "./Navbar";
import profile from "../../assets/navicons/nav1.png";
import order from "../../assets/navicons/nav2.png";
import msg from "../../assets/navicons/nav3.png";
import cartIcon from "../../assets/navicons/nav4.png";
const Nav = styled.div`
  position: fixed;
  transition: all ease 0.3s;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  top: 60px;
  width: 100%;
  bottom: 0;
  right: ${(props) => (props.show ? "0" : "-110%")};
  @media (min-width: 910px) {
    display: none;
  }
`;
export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
export const Flex1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2em;
`;
const Line = styled.div`
  height: 1px;
  background-color: #123;
  margin: 1rem 0;
`;
export const Flex2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
`;
const NavMobItem = styled.div`
  display: flex;
  gap: 1rem;
  margin: auto;
`;
const LogOut = styled.h4`
  transition: all 0.2s ease;
  color: red;
  cursor: pointer;
  &:hover {
    background-color: red;
    color: #fff;
  }
`;
const ITEM = styled.div`
  cursor: pointer;
  padding: 0.4rem;
  transition: all 0.2s ease;
  width: 100%;
  &:hover {
    background-color: #e3e8ee;
    transform: translateX(4px);
    border-left: 5px solid #213;
  }
`;
const MobileNav = ({ show, theme }) => {
  const name = localStorage.getItem("name");
  const { logout } = useContext(AuthCtx);
  return (
    <Nav show={show} theme={theme}>
      <Container>
        <Flex1>
          <ITEM>
            <NavMobItem>
              <Icon src={profile} />
              <Text>{name}</Text>
            </NavMobItem>
          </ITEM>
          <ITEM>
            <NavMobItem>
              <Icon src={msg} />
              <Text>Message</Text>
            </NavMobItem>
          </ITEM>
          <ITEM>
            <Link to="/product" style={{ textDecoration: "none" }}>
              <NavMobItem>
                <Icon src={order} />
                <Text>Orders</Text>
              </NavMobItem>
            </Link>
          </ITEM>
          <ITEM>
            <Link style={{ textDecoration: "none" }} to="/cart">
              <NavMobItem>
                <Icon src={cartIcon} />

                <Text>Cart</Text>
              </NavMobItem>
            </Link>
          </ITEM>
        </Flex1>
        <Line />
        <Flex2>
          <p>User agreement</p>
          <p>Partnership</p>
          <p>Privacy policy</p>
        </Flex2>
        <Line />

        <Flex2 onClick={() => logout()}>
          <LogOut
            style={{
              width: "fit-content",
              textAlign: "center",
              margin: "2rem auto",
              padding: "0.5rem",
              borderRadius: "5px",
              border: "1px solid red",
            }}
          >
            Logout
          </LogOut>
        </Flex2>
      </Container>
    </Nav>
  );
};

export default MobileNav;
