import React from "react";
import styled from "styled-components";

import visa from "../../assets/form icons/visa.png";
import americanex from "../../assets/form icons/americanex.png";
import mastercard from "../../assets/form icons/mastercard.png";
import paypal from "../../assets/form icons/paypal.png";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem 0;
  background-color: #ffffff;
`;
export const Icon = styled.div`
  height: 22px;
  padding: 0 0.5rem;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const IconsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
const FooterSupport = styled.div`
  display: flex;
  gap: 1.5rem;
`;
const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  color: #606060;
  font-family: "Inter", sans-serif;
  font-weight: 400;
`;
const FormFooter = () => {
  return (
    <Wrapper>
      <Container>
        <IconsWrapper>
          <Icon>
            <img src={americanex} alt="americanex" />
          </Icon>
          <Icon>
            <img src={mastercard} alt="mastercard" />
          </Icon>
          <Icon>
            <img src={paypal} alt="paypal" />
          </Icon>
          <Icon>
            <img src={visa} alt="visa" />
          </Icon>
        </IconsWrapper>
        <FooterSupport>
          <p>Support</p>
          <p>Privacy & Cookies</p>
          <p>Accessibility</p>
        </FooterSupport>
      </Container>
    </Wrapper>
  );
};

export default FormFooter;
