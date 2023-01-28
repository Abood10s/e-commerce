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
import HomeBanner from "../components/homeSection/HomeBanner";
import Heading from "../components/heading/Heading";
import RecomGrid from "../components/recommendgrid/RecomGrid";

const Container = styled.div``;
const Home = () => {
  return (
    <Container>
      <Navbar />
      <HomeBanner />
      <HeroGrid himg={herog11} data={herog1data} />
      <HeroGrid himg={herog21} data={herog2data} />
      <QuoteForm />
      <Heading title="Recommended items" />
      <RecomGrid />
      <Heading title="Our extra services" />
      <CardServ />
      <Subscribe />
      <Footer />
    </Container>
  );
};

export default Home;
