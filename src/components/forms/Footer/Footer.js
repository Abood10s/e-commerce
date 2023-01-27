import React from "react";
import styled from "styled-components";
import { Wrapper } from "../LoginForm";
import { Icon, Text, Categories } from "../navbar/Navbar";

import thelogo from "../../../assets/thelogo.png";
import face from "../../../assets/footericons/facebook3.png";
import twitter from "../../../assets/footericons/twitter3.png";
import linked from "../../../assets/footericons/linkedin3.png";
import insta from "../../../assets/footericons/instagram3.png";
import yt from "../../../assets/footericons/youtube3.png";
import googleplay from "../../../assets/footericons/googleplay.png";
import appstore from "../../../assets/footericons/appstore.png";

const icons = [face, twitter, linked, insta, yt];
const list = ["Money Refund", "Money Refund", "Categories", "About Us"];
const NIcon = styled(Icon)`
  margin-right: 0.5rem;
  height: 25px;
  width: 25px;
`;
const Container = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  background-color: #fff;
  padding-top: 1.5rem;
`;
const IIcon = styled(Icon)`
  width: 140px;
  height: 45px;
`;
const FWrapper = styled(Wrapper)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: auto;
  width: 80%;
  gap: 1em;
  padding-bottom: 1em;
`;
const Copyright = styled.div`
  width: 80%;
  margin: auto;
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
export const Wrap = styled.div``;
const Img = styled.img`
  height: 40px;
  width: 120px;
  margin-top: 0.3rem;
`;
const Wraper = styled.div`
  background-color: #eff2f4;
`;
const Footer = () => {
  return (
    <Container>
      <FWrapper>
        <Column>
          <IIcon src={thelogo} />
          <Text>
            Best information about the company gies here but now lorem ipsum is
          </Text>
          <Wrap>
            {icons.map((i) => (
              <NIcon src={i} key={i} />
            ))}
          </Wrap>
        </Column>
        <Column>
          <h4>About</h4>
          {list.map((i) => (
            <Text key={i}>{i}</Text>
          ))}
        </Column>
        <Column>
          <h4>Partnership </h4>
          {list.map((i) => (
            <Text key={i}>{i}</Text>
          ))}
        </Column>
        <Column>
          <h4>Information</h4>
          {list.map((i) => (
            <Text key={i}>{i}</Text>
          ))}
        </Column>
        <Column>
          <h4>For users</h4>
          {list.map((i) => (
            <Text key={i}>{i}</Text>
          ))}
        </Column>
        <Column>
          <h4>Get app</h4>
          <Img src={googleplay} />
          <Img src={appstore} />
        </Column>
      </FWrapper>
      <Wraper>
        <Copyright>
          <Text>© 2023 Ecommerce. </Text>
          <Categories>
            <option value="English">English 🌎</option>
          </Categories>
        </Copyright>
      </Wraper>
    </Container>
  );
};

export default Footer;
