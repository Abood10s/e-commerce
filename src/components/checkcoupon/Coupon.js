import React from "react";
import styled from "styled-components";
const Input = styled.input`
  border: 1px solid #e0e0e0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 0.7rem;
`;
const InputCont = styled.div`
  display: flex;
  margin: 0.5rem 0;
`;
const Button = styled.button`
  border: 1px solid #e0e0e0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #fff;
  color: #0d6efd;
  padding: 0 1rem;
  font-weight: bold;
  border-left: 0px;
  cursor: pointer;
  transition: 0.2s ease-out;
  &:hover {
    background-color: #0d6efd;
    color: #fff;
  }
`;
const CouponCont = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border: 1px solid #e3e8ee;
  border-radius: 4px;
  padding: 1rem;
`;
const Coupon = ({ theme }) => {
  return (
    <CouponCont theme={theme}>
      <label htmlFor="coupon">Have a coupon?</label>
      <InputCont>
        <Input type="text" placeholder="Add coupon" id="coupon" />
        <Button>Apply</Button>
      </InputCont>
    </CouponCont>
  );
};

export default Coupon;
