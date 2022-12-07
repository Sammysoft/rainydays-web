import React from "react";
import styled from "styled-components";
import { Colors, Fonts } from "../Assets/colors";
import plus from "../Assets/svg/plus.svg";

const Wrapper = styled.div`
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.GREEN};
  cursor: pointer;
  width: 100px
`;

const Text = styled.div`
  font-family: ${Fonts.Regular};
  color: white;
  font-size: 0.8rem;
`;

const GreenButtonIcon = () => {
  return (
    <>
      <Wrapper>
        <Text>QUICK SAVE</Text>
        <img src={plus} alt="add" />
      </Wrapper>
    </>
  );
};

export default GreenButtonIcon;
