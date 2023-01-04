/* eslint-disable */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Fonts, Colors } from "../../Assets/colors";
import plus from "../../Assets/svg/plus_circle.svg";

const Loan = () => {
  const [screen, setScreen] = useState("");
  useEffect(() => {
    setScreen(screen);
  }, [screen]);

  switch (screen) {
    case "/loan-1":
      break;

    default:
      return (
        <>
          <Wrapper>
            <CreateSavings
              onClick={() => {
                setScreen("/create-stp1");
              }}
            >
              <img src={plus} alt="plus" />
              <CreateSavingsText>Create new target savings</CreateSavingsText>
            </CreateSavings>
            <CardsWrapper>
              <CardTop>
                <LeftCardTop>HOUSE RENT</LeftCardTop>
                <RightCardTop>APPROVED</RightCardTop>
              </CardTop>
              <BottomCard>
                <BottomLeft>
                  N
                  {Number(1000000).toLocaleString("en-US", {
                    minimumFractionDigits: 0,
                  })}
                </BottomLeft>
                <BottomRight>N20,000 P.M</BottomRight>
              </BottomCard>
            </CardsWrapper>
          </Wrapper>
          <div
            style={{
              fontFamily: `${Fonts.Regular}`,
              fontWeight: "400",
              opacity: ".4",
              padding: "10px 0px 10px 0px",
              fontSize: "1.5rem",
            }}
          >
            Loan History
          </div>
          <TableWrap>
            <TableHead>
              <Th>LOAN NAME</Th>
              <Th>AMOUNT</Th>
              <Th>INTEREST</Th>
              <Th>REFUND</Th>
              <Th>DATE TAKEN</Th>
              <Th>DATE REPAYED</Th>
            </TableHead>
            <TableRow>
              <TableElement>TRAVEL PLANS</TableElement>
              <TableElement>
                N
                {Number(65000).toLocaleString("en-US", {
                  minimumFractionDigits: 0,
                })}
              </TableElement>
              <TableElement>10.0%</TableElement>
              <TableElement>
                N
                {Number(67500).toLocaleString("en-US", {
                  minimumFractionDigits: 0,
                })}
              </TableElement>
              <TableElement>16 Dec 2022</TableElement>
              <TableElement>16 Dec 2023</TableElement>
            </TableRow>
            <TableRow>
              <TableElement>SCHOOL FEES</TableElement>
              <TableElement>
                N
                {Number(10000).toLocaleString("en-US", {
                  minimumFractionDigits: 0,
                })}
              </TableElement>
              <TableElement>20.0%</TableElement>
              <TableElement>
                N
                {Number(10500).toLocaleString("en-US", {
                  minimumFractionDigits: 0,
                })}
              </TableElement>
              <TableElement>16 Dec 2022</TableElement>
              <TableElement>16 Dec 2023</TableElement>
            </TableRow>
          </TableWrap>
        </>
      );
      break;
  }
  return (
    <>
      <Wrapper></Wrapper>
    </>
  );
};

export default Loan;

const TableWrap = styled.div`
  width: 100%;
  height: 40vh;
  margin-top: 10px;
`;
const TableHead = styled.div`
  width: 100%;
  background: #e0ecff;
  border-radius: 8px;
  font-family: ${Fonts.Regular};
  padding: 15px 0px 15px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const TableRow = styled.div`
  background: #f4f8ff;
  border-radius: 8px;
  padding: 15px 0px 15px 0px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 5px;
`;
const TableElement = styled.div`
  font-family: ${Fonts.Regular};
  font-weight: 400;
  opacity: 0.4;
  text-align: center;
  font-size: 0.8rem;
  width: 15%;
`;
const Th = styled.div`
  font-family: ${Fonts.Regular};
  font-weight: 700;
  text-align: center;
  width: 15%;
`;
const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 30%);
  grid-gap: 5%;
  height: fit-content;
  overflow-y: hidden;
`;
const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  top: 0px;
  left: 0px;
`;
const BankAccountWrapper = styled.div`
  background: white;
  border-radius: 8px;
  height: 70%;
  width: 50%;
  padding: 25px;
`;

const BankWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: ${Fonts.Regular};
`;

const ChoiceWrapper = styled.div`
  border-radius: 8px;
  background: ${Colors.INPUT_BORDER};
  font-family: ${Fonts.Regular};
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0px 10px 0px;
  cursor: pointer;
`;

const Text = styled.div`
  font-family: ${Fonts.Regular};
`;

const ButtonWrap = styled.div`
  background: ${Colors.PRIMARY};
  border-radius: 8px;
  color: white;
  font-weight: 900;
  font-family: ${Fonts.Regular};
  text-align: center;
  font-size: 1rem;
  padding: 10px;
  margin: 20px 0px 0px 0px;
  cursor: pointer;
`;

const TableInfo = styled.div`
  width: 100%;
  font-family: ${Fonts.Regular};
  font-size: 0.7rem;
  color: #859cc2;
`;

//View Options
const ElementWrapper = styled.div`
  width: 100%;
  border-top: 1px solid #9aa6b9;
  border-bottom: 1px solid #9aa6b9;
  padding: 5px;
  margin: 10px 0px 10px 0px;
`;
const TableWrapper = styled.div`
  padding: 10px 0px 10px 0px;
  font-family: ${Fonts.Regular};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const TableElementLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;
const TableElementRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align-right;
`;
const HeadTableElement = styled.div`
  color: #808080;
  font-family: ${Fonts.Regular};
  font-size: 0.7rem;
  font-weight: 700;
  width: 100%;
`;
const HeadTableValue = styled.div`
  color: #263959;
  font-family: ${Fonts.Regular};
  font-size: 1.2rem;
`;

//Terms and conditions styles
const TermsWrapper = styled.div`
  border-radius: 9px;
  border: 1px solid #d2e3ff;
  width: 90%;
  padding: 40px;
  background: #fdfeff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  max-height: 50vh;
  min-height: 40vh;
`;

const TermsHeadText = styled.div`
  color: #263959;
  font-weight: 800;
  font-family: ${Fonts.Regular};
  font-size: 1rem;
`;

const TermsTextBody = styled.li`
  font-family: ${Fonts.Regular};
  padding: 5px;
  font-size: 0.6rem;
  text-align: left;
`;

const PrevButton = styled.div`
  padding: 10px 25px;
  font-family: ${Fonts.Regular};
  color: ${Colors.GREY};
  background-color: ${Colors.INPUT_BORDER};
  border-radius: 7px;
  font-weight: 900;
  font-size: 1rem;
  cursor: pointer;
  width: fit-content;
  margin: 10px 0px 10px 10px;
`;

//Create Screen Styles;
const CreateWrapper = styled.div`
  width: 80%;
  margin: 10px 10% 0px 10%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  height: 50vh;
`;

const BottomText = styled.div`
  font-family: ${Fonts.Regular};
  font-size: 1rem;
  padding: 20px 0px 10px 0px;
  font-weight: 600;
  opacity: 0.4;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  text-align: right;
  float: right;
`;

const LeftPart = styled.div`
  font-family: ${Fonts.Regular};
  font-weight: 800;
  color: black;
  width: 45%;
  font-size: 3rem;
`;

const RightPart = styled.div`
  font-family: ${Fonts.Regular};
  width: 50%;
`;

//
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
  cursor: pointer;
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
