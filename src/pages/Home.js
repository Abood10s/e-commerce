import React from "react";
import styled from "styled-components";
import CardServ from "../components/Cards/CardServ";
import Footer from "../components/forms/Footer/Footer";
import Subscribe from "../components/forms/Footer/Subscribe";
import Navbar from "../components/forms/navbar/Navbar";
import QuoteForm from "../components/forms/quoteform/QuoteForm";
import HeroGrid from "../components/herogrid/HeroGrid";
import herog1data from "../Herogrid1data";
import herog2data from "../Herogrid2data";
import herog11 from "../assets/herogrid1/herog1.png";
import herog21 from "../assets/herogrid2/herog21.png";
import HomeBanner from "../components/homeSection/HomeBanner";
import Heading from "../components/heading/Heading";
import RecomGrid from "../components/recommendgrid/RecomGrid";

const Container = styled.div`
  background-color: ${(props) => props.theme.primaryClr};
  color: ${(props) => props.theme.secondaryClr};
`;
const ThemeBtn = styled.button`
  border: none;
  border-radius: 50%;
  padding: 0.5rem 0.6rem;
  font-size: 30px;
  border: 1px solid #000;
  cursor: pointer;
  position: fixed;
  top: 20%;
`;
const Home = ({ theme, handleDarkMode }) => {
  return (
    <Container theme={theme}>
      <ThemeBtn onClick={handleDarkMode}>
        <i class="fa-regular fa-moon"></i>
      </ThemeBtn>
      <Navbar theme={theme} />
      <HomeBanner theme={theme} />
      <HeroGrid himg={herog11} data={herog1data} theme={theme} />
      <HeroGrid himg={herog21} data={herog2data} theme={theme} />
      <QuoteForm />
      <Heading title="Recommended items" theme={theme} />
      <RecomGrid theme={theme} />
      <Heading title="Our extra services" theme={theme} />
      <CardServ theme={theme} />
      <Subscribe theme={theme} />
      <Footer theme={theme} />
    </Container>
  );
};

export default Home;
