import React from "react";
import styled from "styled-components";
import FormBtn from "../Buttons/FormBtn";
import FormFooter from "./FormFooter";
import { Link } from "react-router-dom";

import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import ContFormBtn from "../Buttons/ContFormBtn";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  width: 30%;
  margin: 2rem auto;
  padding: 2rem 1rem;
  box-shadow: 0px 0px 10px 2px rgba(32, 32, 32, 0.1);
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 1200px) {
    width: 50%;
  }
`;

export const Wrapper = styled.div`
  width: 90%;
`;
export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  text-align: center;
`;
export const Title = styled.h2`
  margin-bottom: 1rem;
`;
export const Input = styled.input`
  padding: 5px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  outline: none;
  padding: 0.5rem 0.5rem;
  margin-top: 0.2rem;
  height: 45px;
`;
export const Inputsec = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem 0;
`;
export const InputLabel = styled.label`
  font-weight: 700;
  font-size: 14px;
`;
const Incontainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Or = styled.p`
  color: #a9acb0;
  margin: 1rem 0;
  position:relative;
  text-align:center;
  &::before{
    content: "";
    position:absolute;
    top:50%;
    left:0;
    height:2px;
    width:70%
    background-color:#E0E0E0;

  }
  &::after{
    content:""
    position:absolute;
    top:50%;
    right:0;
    width:30%;
    height:2px;
    background-color:#E0E0E0;

  }
`;
export const ForgotP = styled.p`
  color: #0d6efd;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const Form = styled.form`
  margin-bottom: 5em;
`;
const LoginForm = () => {
  return (
    <Form>
      <Container>
        <Wrapper>
          <Title>Sign in</Title>
          <Inputsec>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              type="email"
              id="username"
              placeholder="Email or phone"
              required
            />
          </Inputsec>
          <Inputsec>
            <Incontainer>
              <InputLabel htmlFor="password">Password</InputLabel>
              <ForgotP>Forgot password</ForgotP>
            </Incontainer>
            <Input
              type="password"
              id="password"
              placeholder="Type here"
              minLength={6}
              required
            />
          </Inputsec>
          <CheckBox>
            <Input type="checkbox" name="check" id="check" required />
            <InputLabel htmlFor="check">Remember me</InputLabel>
          </CheckBox>
          <FormBtn title="Log In" />
          <Or>OR</Or>
          <ContFormBtn icon={google} title="Google" clr="#000" />
          <ContFormBtn icon={facebook} title="Facebook" bg="#4267B2" />
          <CheckBox>
            Don’t have an account?
            <ForgotP>
              <Link style={{ color: "#0D6EFD" }} to="/signup">
                Register now
              </Link>
            </ForgotP>
          </CheckBox>
          <FormFooter />
        </Wrapper>
      </Container>
    </Form>
  );
};

export default LoginForm;
