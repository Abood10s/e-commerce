import React, { useContext } from "react";
import styled from "styled-components";
import { useState } from "react";
import { CategoryCtx } from "../../CartContext/CategoryContext";
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  border-bottom: 1px solid #eee;
  margin: 1rem 0;
  padding: 0.5em 0;
  @media (max-width: 768px) {
    width: 95%;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
export const Blue = styled.p`
  color: #0d6efd;
  font-size: 13px;
  font-weight: bold;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  transition: 0.6s;
`;
const InputWrap = styled.div`
  display: flex;
  gap: 0.3em;
  cursor: pointer;
`;
const Accordion = ({ title, data, type }) => {
  const [show, setShow] = useState(true);
  const { tags, setTags } = useContext(CategoryCtx);
  return (
    <Wrap>
      <Header onClick={() => setShow(!show)}>
        <h4>{title}</h4>
        <p>
          <i class={`fa-solid fa-chevron-${show ? "up" : "down"}`}></i>
        </p>
      </Header>
      {show && (
        <Content>
          {data.map((item) => {
            return (
              <InputWrap key={item}>
                <input
                  type={type}
                  id={item}
                  onClick={() => {
                    setTags([...tags, item]);
                  }}
                />
                <label htmlFor={item}>{item}</label>
              </InputWrap>
            );
          })}
          <Blue>See all</Blue>
        </Content>
      )}
    </Wrap>
  );
};

export default Accordion;
