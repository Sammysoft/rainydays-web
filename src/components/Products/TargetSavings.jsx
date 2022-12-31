/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { Fonts } from "../../Assets/colors";
import plus from "../../Assets/svg/plus_circle.svg";

const TargetSavings = () => {
  return (
    <>
      <Wrapper>
        <CreateSavings>
          <img src={plus} alt="plus" />
          <CreateSavingsText>Create new target savings</CreateSavingsText>
        </CreateSavings>
        <CardsWrapper>
          <CardTop>
            <LeftCardTop>UNIVERSITY TUITION</LeftCardTop>
            <RightCardTop>2.5% INTEREST</RightCardTop>
          </CardTop>
          <BottomCard>
            <BottomLeft>N200,000</BottomLeft>
            <BottomRight>N20,000 P.M</BottomRight>
          </BottomCard>
        </CardsWrapper>
        <CardsWrapper>
          <CardTop>
            <LeftCardTop>HOUSE RENT</LeftCardTop>
            <RightCardTop>2.5% INTEREST</RightCardTop>
          </CardTop>
          <BottomCard>
            <BottomLeft>N500,000</BottomLeft>
            <BottomRight>N50,000 P.M</BottomRight>
          </BottomCard>
        </CardsWrapper>
        <CardsWrapper>
          <CardTop>
            <LeftCardTop>UNIVERSITY TUITION</LeftCardTop>
            <RightCardTop>2.5% INTEREST</RightCardTop>
          </CardTop>
          <BottomCard>
            <BottomLeft>N200,000</BottomLeft>
            <BottomRight>N20,000 P.M</BottomRight>
          </BottomCard>
        </CardsWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 30%);
  grid-gap: 5%;
  height: 80vh;
  overflow-y: hidden;
`;

const CreateSavings = styled.div`
  background: #fdfeff;
  border: 1px solid #ebf3ff;
  box-shadow: 0px 4px 8px rgba(235, 243, 255, 0.6);
  border-radius: 8px;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  justify-content: center;
`;

const CreateSavingsText = styled.div`
  color: blue;
  font-family: ${Fonts.Regular};
  font-weight: 600;
  padding: 10px 0px 0px 0px;
`;

const CardsWrapper = styled.div`
  height: 20vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  background: #ebf3ff;
  box-shadow: 0px 4px 8px rgba(240, 243, 247, 0.8);
  border-radius: 8px;
`;

const CardTop = styled.div`
  width: 100%;
  font-family: ${Fonts.Regular};
  color: blue;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LeftCardTop = styled.div`
  width: fit-content;
  font-size: 1rem;
  color: blue;
  font-family: ${Fonts.Regular};
`;

const RightCardTop = styled.div`
  background: blue;
  color: white;
  border-radius: 5px;
  padding: 8px;
  text-align: center;
  width: fit-content;
  font-size: 0.6rem;
`;

const BottomCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: ${Fonts.Regular};
`;

const BottomLeft = styled.div`
  font-weight: 900;
  font-size: 2.3rem;
  color: black;
  font-family: ${Fonts.Regular};
`;

const BottomRight = styled.div`
  font-size: 0.6rem;
  color: grey;
  font-family: ${Fonts.Regular};
`;

export default TargetSavings;
