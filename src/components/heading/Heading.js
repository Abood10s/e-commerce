import React from "react";
import styled from "styled-components";

const Header = styled.h2`
  width: 80%;
  margin: 0.5rem auto;
`;
const Heading = ({ title }) => {
  return <Header>{title}</Header>;
};

export default Heading;
