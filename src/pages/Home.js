import React from "react";
import styled from "styled-components";
import CardServ from "../components/Cards/CardServ";
import Footer from "../components/forms/Footer/Footer";
import Subscribe from "../components/forms/Footer/Subscribe";
import Navbar from "../components/forms/navbar/Navbar";
import QuoteForm from "../components/forms/quoteform/QuoteForm";
import HeroGrid from "../herogrid/HeroGrid";
import herog1data from "../Herogrid1data";
import herog2data from "../Herogrid2data";
import herog11 from "../assets/herogrid1/herog1.png";
import herog21 from "../assets/herogrid2/herog21.png";

const Container = styled.div``;
const Home = () => {
  return (
    <Container>
      <Navbar />
      <HeroGrid himg={herog11} data={herog1data} />
      <HeroGrid himg={herog21} data={herog2data} />
      <QuoteForm />
      <CardServ />
      <Subscribe />
      <Footer />
    </Container>
  );
};

export default Home;
