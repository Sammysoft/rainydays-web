import styled from "styled-components";
import React from "react";
import { Fonts } from "../Assets/colors";

const CardWrapper = styled.div`
border-radius: 8px;
background-color: ${(props) => props.background};
display: flex;
align-items: flex-start;
justify-content: space-between;
padding: 20px;
flex-direction: row;
width: 25%;
height: 100%;
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const IconWrapper = styled.div`
  cursor: pointer;
`;
const CardName = styled.div`
  font-family: ${Fonts.Regular};
  font-weight: 400;
  color: white;
`;

const CardAmount = styled.div`
font-weight; 900;
font-size: 2rem;
color: white;
font-family: ${Fonts.Regular};
`;

const MoneyCard = ({ amount, background, icon, name }) => {
  return (
    <>
      <CardWrapper background={background}>
        <CardDetails>
          <CardName>{name}</CardName>
          <CardAmount>{amount}</CardAmount>
        </CardDetails>
        <IconWrapper>{icon}</IconWrapper>
      </CardWrapper>
    </>
  );
};


export default MoneyCard;