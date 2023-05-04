import React from "react";
import styled from "styled-components";
import Bill from "./Bill";
import Coupon from "./Coupon";

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;
const CheckCoupon = ({ theme }) => {
  return (
    <Cont theme={theme}>
      <Coupon theme={theme} />
      <Bill theme={theme} />
    </Cont>
  );
};

export default CheckCoupon;
