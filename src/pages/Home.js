import React, { Suspense } from "react";
import styled from "styled-components";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import herog1data from "../Herogrid1data";
import herog2data from "../Herogrid2data";

import herog11 from "../assets/herogrid1/herog1.png";
import herog21 from "../assets/herogrid2/herog21.png";

const Offers = React.lazy(() => import("../components/offers/Offers"));
const CardServ = React.lazy(() => import("../components/Cards/CardServ"));
const Footer = React.lazy(() => import("../components/Footer/Footer"));
const Subscribe = React.lazy(() => import("../components/Footer/Subscribe"));
const Navbar = React.lazy(() => import("../components/navbar/Navbar"));
const QuoteForm = React.lazy(() =>
  import("../components/forms/quoteform/QuoteForm")
);
const HeroGrid = React.lazy(() => import("../components/herogrid/HeroGrid"));
const HomeBanner = React.lazy(() =>
  import("../components/homeSection/HomeBanner")
);
const Heading = React.lazy(() => import("../components/heading/Heading"));
const RecomGrid = React.lazy(() =>
  import("../components/recommendgrid/RecomGrid")
);

const Container = styled.div`
  background-color: ${(props) => props.theme.primaryClr};
  color: ${(props) => props.theme.secondaryClr};
`;

const Home = ({ theme, handleDarkMode }) => {
  return (
    <Container theme={theme}>
      <Suspense fallback={<Skeleton count={1} height={100} />}>
        <Navbar theme={theme} handleDarkMode={handleDarkMode} />
      </Suspense>
      <Suspense fallback={<Skeleton count={1} height={100} />}>
        <HomeBanner theme={theme} />
      </Suspense>
      <Suspense fallback={<Skeleton count={1} height={100} />}>
        <Offers theme={theme} />
      </Suspense>
      <Suspense fallback={<Skeleton count={1} height={100} />}>
        <HeroGrid himg={herog11} data={herog1data} theme={theme} />
      </Suspense>
      <Suspense fallback={<Skeleton count={1} height={100} />}>
        <HeroGrid himg={herog21} data={herog2data} theme={theme} />
      </Suspense>
      <Suspense fallback={<Skeleton count={1} height={100} />}>
        <QuoteForm />
      </Suspense>
      <Suspense fallback={<Skeleton count={1} height={100} />}>
        <Heading title="Recommended items" theme={theme} />
      </Suspense>
      <Suspense fallback={<Skeleton count={1} height={100} />}>
        <RecomGrid theme={theme} />
      </Suspense>
      <Suspense fallback={<Skeleton count={1} height={100} />}>
        <Heading title="Our extra services" theme={theme} />
      </Suspense>
      <Suspense fallback={<Skeleton count={1} height={100} />}>
        <CardServ theme={theme} />
      </Suspense>
      <Suspense fallback={<Skeleton count={1} height={100} />}>
        <Subscribe theme={theme} />
      </Suspense>{" "}
      <Suspense fallback={<Skeleton count={1} height={100} />}>
        <Footer theme={theme} />
      </Suspense>
    </Container>
  );
};

export default Home;
