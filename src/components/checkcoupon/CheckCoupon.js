import React from "react";
import styled from "styled-components";
import Bill from "./Bill";
import Coupon from "./Coupon";

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const CheckCoupon = () => {
  return (
    <Cont>
      <Coupon />
      <Bill />
    </Cont>
  );
};

export default CheckCoupon;
