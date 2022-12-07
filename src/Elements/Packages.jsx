import React from "react";
import styled from "styled-components";
import { Colors, Fonts } from "../Assets/colors";

const Wrapper = styled.div`
  border-radius: 8px;
  border: 1px solid ${Colors.LIGHT};
  padding: 10px;
  background-color: white;
  height: 28vh;
  width: 20%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0px 0px 10px 0px;
`;

const HeaderText = styled.div`
  color: ${Colors.PRIMARY};
  font-weight: 900;
  font-size: 1.5rem;
  font-family: ${Fonts.Regular};
`;
const IconWrapper = styled.div`
  cursor: pointer;
`;
const Body = styled.div`
  width: 100%;
  font-family: ${Fonts.Regular};
  color: ${Colors.GREY};
  font-size: 1rem;
  margin: 10px 0px;
`;

const Packages = ({ name, icon }) => {
  return (
    <>
      <Wrapper>
        <Header>
          <HeaderText>{name}</HeaderText>
          <IconWrapper>{icon}</IconWrapper>
        </Header>
        <Body>
          Save N50,000 Monthly for a period of 10 Months and get N500,000
        </Body>
      </Wrapper>
    </>
  );
};
export default Packages;
