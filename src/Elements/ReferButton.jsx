import styled from "styled-components";
import React from "react";
import { Fonts } from "../Assets/colors";


const Wrapper = styled.div`
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  color: black;
  background-color: white;
  font-family: ${Fonts.Regular};
  font-weight: 900;
  font-family: 1.5rem;
`;

const ReferButton = ({ text }) => {
  return (
    <>
      <Wrapper>{text}</Wrapper>
    </>
  );
};
export default ReferButton;
