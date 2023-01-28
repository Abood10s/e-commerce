import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #0d6efd;
  padding: 0.9rem;
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
`;
const FormBtn = ({ title }) => {
  return <Button type="submit">{title}</Button>;
};

export default FormBtn;
