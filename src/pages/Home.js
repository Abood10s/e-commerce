import React, { Suspense } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import herog1data from "../MockData/Herogrid1data";
import herog2data from "../MockData/Herogrid2data";

import herog11 from "../assets/herogrid1/herog1.png";
import herog21 from "../assets/herogrid2/herog21.png";
import Navbar from "../components/navbar/Navbar";

const Offers = React.lazy(() => import("../components/offers/Offers"));
const CardServ = React.lazy(() => import("../components/Cards/CardServ"));
const Footer = React.lazy(() => import("../components/Footer/Footer"));
const Subscribe = React.lazy(() => import("../components/Footer/Subscribe"));
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
      <Navbar theme={theme} handleDarkMode={handleDarkMode} />
      <Fade>
        <Suspense fallback={<Skeleton width="100%" count={1} height={100} />}>
          <HomeBanner theme={theme} />
        </Suspense>
      </Fade>
      <Suspense
        fallback={<Skeleton width="100%" duration={1} count={1} height={100} />}
      >
        <Fade>
          <Offers theme={theme} />
        </Fade>
      </Suspense>
      <Suspense
        fallback={<Skeleton width="100%" duration={1} count={1} height={100} />}
      >
        <Fade direction="left">
          <HeroGrid himg={herog11} data={herog1data} theme={theme} />
        </Fade>
      </Suspense>
      <Suspense
        fallback={<Skeleton width="100%" duration={1} count={1} height={100} />}
      >
        <Fade direction="left">
          <HeroGrid himg={herog21} data={herog2data} theme={theme} />
        </Fade>
      </Suspense>
      <Suspense
        fallback={<Skeleton width="100%" duration={1} count={1} height={100} />}
      >
        <Fade direction="left">
          <QuoteForm />
        </Fade>
      </Suspense>
      <Suspense
        fallback={<Skeleton width="100%" duration={1} count={1} height={100} />}
      >
        <Fade direction="down">
          <Heading title="Recommended items" theme={theme} />
        </Fade>
      </Suspense>
      <Suspense
        fallback={<Skeleton width="100%" duration={1} count={1} height={100} />}
      >
        <Fade direction="left">
          <RecomGrid theme={theme} />
        </Fade>
      </Suspense>
      <Suspense
        fallback={<Skeleton width="100%" duration={1} count={1} height={100} />}
      >
        <Fade direction="down">
          <Heading title="Our extra services" theme={theme} />
        </Fade>
      </Suspense>
      <Suspense
        fallback={<Skeleton width="100%" duration={1} count={1} height={100} />}
      >
        <Fade direction="left">
          <CardServ theme={theme} />
        </Fade>
      </Suspense>
      <Suspense
        fallback={<Skeleton width="100%" duration={1} count={1} height={100} />}
      >
        <Fade direction="left">
          <Subscribe theme={theme} />
        </Fade>
      </Suspense>{" "}
      <Suspense
        fallback={<Skeleton width="100%" duration={1} count={1} height={100} />}
      >
        <Footer theme={theme} />
      </Suspense>
    </Container>
  );
};

export default Home;
