import React from "react";
import styled from "styled-components";
import { SubscribeBtn } from "./Footer/Subscribe";
import { Input } from "./LoginForm";
import { Wrap } from "./Footer/Footer";
const Select = styled.select`
  height: 40px;
  margin: 0 2rem;
  width: 20%;
  border: 1px solid #e3e8ee;
  outline: none;
  border-radius: 5px;
`;
const Text = styled.h2``;
const Text2 = styled.p``;
const Wrap2 = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  background-color: #fff;
  padding: 2rem;
  border-radius: 5px;
`;
const Textarea = styled.textarea`
  border-radius: 5px;
  border: 1px solid #e3e8ee;
  outline: none;
  padding: 0.3rem;
  resize: vertical;
`;
const Btn = styled(SubscribeBtn)`
  padding: 1rem;
  width: 40%;
`;
const InquiryForm = () => {
  return (
    <Wrap2>
      <h2>Send quote to suppliers</h2>
      <Input placeholder="What item you need?" />
      <Textarea placeholder="What item you need?" rows="4" cols="50"></Textarea>
      <Wrap>
        <Input placeholder="Quantity" />
        <Select>
          <option value="pcs">Pcs</option>
        </Select>
      </Wrap>
      <Btn>Send inquiry</Btn>
    </Wrap2>
  );
};

export default InquiryForm;
