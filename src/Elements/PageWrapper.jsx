import React from "react";
import styled from "styled-components";
import { Colors, Fonts } from "../Assets/colors";
import background from "../Assets/background.png";

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
`;

const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${Colors.PRIMARY};
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0px;
  font-family: ${Fonts.Regular};
`;

const RightWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const PageWrapper = ({ left_element, right_element }) => {
  return (
    <>
      <Wrapper>
        <LeftWrapper>{left_element}</LeftWrapper>
        <RightWrapper>{right_element}</RightWrapper>
      </Wrapper>
    </>
  );
};

export default PageWrapper;
