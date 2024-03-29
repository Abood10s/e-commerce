import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CartCtx } from "../Contexts/CartContext";

import Footer from "../components/Footer/Footer";
import Heading from "../components/heading/Heading";
import Navbar from "../components/navbar/Navbar";
import CartItem from "../components/Cart/CartItem";
import CartMBtn from "../components/Buttons/CartMBtn";
import { SubscribeBtn } from "../components/Footer/Subscribe";
import CheckCoupon from "../components/checkcoupon/CheckCoupon";

import img1 from "../assets/cartimages/03.png";
import img2 from "../assets/cartimages/04.png";
import img3 from "../assets/cartimages/07.png";
import img4 from "../assets/cartimages/09.png";
import CartCard from "../components/Cards/CartCard";
import Discount from "../components/discount/Discount";

const cards = [
  {
    id: 10,
    img: img1,
    price: "180.00",
    quantity: 1,
    body: "apple watch - silver & black",
  },
  {
    id: 11,
    img: img2,
    quantity: 1,
    price: "1450.00",
    body: "macbook space grey 512 gb",
  },
  {
    id: 12,
    img: img3,
    quantity: 1,
    price: "399.50",
    body: "Lenovo tablet for gaming",
  },
  {
    id: 13,
    img: img4,
    quantity: 1,
    price: "599.50",
    body: "iphone 12 navy blue 256gb",
  },
];

export const Wrapper = styled.div`
  width: 80%;
  margin: 2rem auto;
  margin-top: 10rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 1rem;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border-radius: 4px;
  @media (max-width: 1050px) {
    grid-template-columns: 2fr 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    margin: 6rem auto;
    margin-bottom: 1.5rem;
  }
`;
const Container = styled.div``;
export const Container1 = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  width: 100%;
  border-radius: 4px;
  padding: 1rem;
  border: 1px solid #e3e8ee;
`;
export const Container2 = styled.div`
  border-radius: 4px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
`;
const CartCards = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 2rem auto;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const EmptyCart = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Img = styled.img`
  display: block;
  height: 400px;
  width: 400px;
  object-fit: cover;
  margin: 0 auto;
  @media (max-width: 650px) {
    height: 240px;
    width: 240px;
  }
`;
const Cart = ({ theme }) => {
  const { cart } = useContext(CartCtx);
  return (
    <Container>
      <Navbar />
      <Heading title={`My cart (${cart.length})`} />

      <Wrapper>
        <Container1 theme={theme}>
          {cart?.map((product) => {
            const { image, title, price, body, id, img, quantity } = product;

            return (
              <CartItem
                theme={theme}
                key={id}
                img={img || image}
                title={title}
                price={price}
                id={id}
                body={body}
                quantity={quantity}
              />
            );
          })}
          {cart.length !== 0 ? (
            <Buttons>
              <Link to="/store/all" style={{ textDecoration: "none" }}>
                <SubscribeBtn>
                  <i className="fa-solid fa-arrow-left-long"></i>Back to shop
                </SubscribeBtn>
              </Link>
              <CartMBtn title="Remove all" />
            </Buttons>
          ) : (
            <div style={{ margin: "0 auto" }}>
              <Img
                src="
                https://shop.millenniumbooksource.com/static/images/cart1.png
                "
                alt="empty cart"
              />
              <EmptyCart>
                <Link to="/store/all" style={{ textDecoration: "none" }}>
                  <SubscribeBtn>
                    <i className="fa-solid fa-arrow-left-long"></i>Back to shop
                  </SubscribeBtn>
                </Link>
              </EmptyCart>
            </div>
          )}
        </Container1>
        <Container2>
          {cart.length !== 0 ? <CheckCoupon theme={theme} /> : ""}
        </Container2>
      </Wrapper>
      <Heading title="Saved for later" />
      <CartCards>
        {cards.map((item, index) => {
          return <CartCard item={item} key={index} theme={theme} />;
        })}
      </CartCards>
      <Discount theme={theme} />
      <Footer />
    </Container>
  );
};

export default Cart;
