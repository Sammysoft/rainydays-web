/* eslint-disable */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Colors, Fonts } from "../../Assets/colors";
import plus from "../../Assets/svg/plus_circle.svg";
import { Button } from "../../Elements/Button";
import { InputField } from "../../Elements/InputText";
import bank from "../../Assets/svg/bank.svg";
import card from "../../Assets/svg/card.svg";

const TargetSavings = () => {
  const [screen, setScreen] = useState("");
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState("");
  const [date, setDate] = useState("");

  //Modals
  const [toggleBankModal, setToggleBankModal] = useState(false);
  const [toggleCardModal, setToggleCardModal] = useState(false);

  useEffect(() => {
    setScreen(screen);
  }, [screen]);

  switch (screen) {
    case "/create-stp1":
      return (
        <>
          <CreateWrapper>
            <LeftPart>
              Let’s set up a new target savings for you
              <BottomText>Name your savings and set an amount </BottomText>
            </LeftPart>
            <RightPart>
              <InputField
                placeholder="Set Savings name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <InputField
                placeholder="For how long"
                value={duration}
                onChange={(e) => {
                  setDuration(e.target.value);
                }}
              />
              <InputField
                placeholder="Amount"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
              <ButtonWrapper>
                <Button
                  style={{ float: "right" }}
                  onClick={() => {
                    setScreen("create-stp2");
                  }}
                >
                  Next
                </Button>
              </ButtonWrapper>
            </RightPart>
          </CreateWrapper>
        </>
      );
      break;
    case "create-stp2":
      return (
        <>
          <CreateWrapper>
            <LeftPart>
              Let’s set up a new target savings for you
              <BottomText>
                Set how often you would be making your payment
              </BottomText>
            </LeftPart>
            <RightPart>
              <InputField
                placeholder="How often"
                value={frequency}
                onChange={(e) => {
                  setFrequency(e.target.value);
                }}
              />
              <InputField
                placeholder="Set date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
              <ButtonWrapper
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <PrevButton
                  onClick={() => {
                    setScreen("/create-stp1");
                  }}
                >
                  Prev
                </PrevButton>
                <Button
                  onClick={() => {
                    setScreen("/create-stp3");
                  }}
                >
                  Next
                </Button>
              </ButtonWrapper>
            </RightPart>
          </CreateWrapper>
        </>
      );
      break;
    case "/create-stp3":
      return (
        <>
          <CreateWrapper>
            <LeftPart>
              There are some T&Cs, go through them
              <BottomText>Accept T&C to proceed </BottomText>
            </LeftPart>
            <RightPart>
              <TermsWrapper>
                <TermsHeadText>Terms and Conditions</TermsHeadText>
                <ul style={{ overflowY: "scroll" }}>
                  <TermsTextBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum
                  </TermsTextBody>
                  <TermsTextBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum
                  </TermsTextBody>
                </ul>
              </TermsWrapper>
              <ButtonWrapper>
                <Button
                  style={{ float: "right" }}
                  onClick={() => {
                    setScreen("/create-stp4");
                  }}
                >
                  Next
                </Button>
              </ButtonWrapper>
            </RightPart>
          </CreateWrapper>
        </>
      );
      break;
    case "/create-stp4":
      return (
        <>
          <CreateWrapper>
            <LeftPart>
              Take one more look
              <BottomText>Review your plan before making a payment </BottomText>
            </LeftPart>
            <RightPart>
              <TermsWrapper style={{ display: "block" }}>
                <TermsHeadText>Target Savings Review</TermsHeadText>
                <ElementWrapper>
                  <TableWrapper>
                    <TableElementLeft>
                      <HeadTableElement>SAVINGS NAME</HeadTableElement>
                      <HeadTableValue>{name}</HeadTableValue>
                    </TableElementLeft>
                    <TableElementRight>
                      <HeadTableElement style={{ textAlign: "right" }}>
                        FREQUENCY
                      </HeadTableElement>
                      <HeadTableValue>{frequency}</HeadTableValue>
                    </TableElementRight>
                  </TableWrapper>
                  <TableWrapper>
                    <TableElementLeft>
                      <HeadTableElement>AMOUNT</HeadTableElement>
                      <HeadTableValue>
                        N{" "}
                        {Number(amount).toLocaleString("en-US", {
                          minimumFractionDigits: 0,
                        })}
                      </HeadTableValue>
                    </TableElementLeft>
                    <TableElementRight>
                      <HeadTableElement style={{ textAlign: "right" }}>
                        DATE
                      </HeadTableElement>
                      <HeadTableValue>{date}</HeadTableValue>
                    </TableElementRight>
                  </TableWrapper>
                  <TableWrapper>
                    <TableElementLeft>
                      <HeadTableElement>DURATION</HeadTableElement>
                      <HeadTableValue>{duration}</HeadTableValue>
                    </TableElementLeft>
                    <TableElementRight>
                      <HeadTableElement style={{ textAlign: "right" }}>
                        CASHOUT DATE
                      </HeadTableElement>
                      <HeadTableValue>{date}</HeadTableValue>
                    </TableElementRight>
                  </TableWrapper>
                </ElementWrapper>
                <TableInfo>
                  Make payment into a bank accout or use your debit card
                </TableInfo>
                <BankWrapper>
                  <ChoiceWrapper
                    onClick={() => {
                      setToggleBankModal(true);
                    }}
                  >
                    {toggleBankModal === true ? <>{BankModal()}</> : <></>}
                    <Text>Bank Acc.</Text>
                    <img src={bank} alt="bank" />
                  </ChoiceWrapper>
                  <div
                    style={{
                      fontFamily: `${Fonts.Regular}`,
                      textAlign: "center",
                    }}
                  >
                    OR
                  </div>
                  <ChoiceWrapper
                    onClick={() => {
                      setToggleCardModal(true);
                    }}
                  >
                    {toggleCardModal === true ? <>{CardModal()}</> : <></>}
                    <Text>Debit Card</Text>
                    <img src={card} alt="card" />
                  </ChoiceWrapper>
                </BankWrapper>
                <ButtonWrap>Make Payments</ButtonWrap>
              </TermsWrapper>
            </RightPart>
          </CreateWrapper>
        </>
      );
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
      break;
  }
};

const BankModal = () => {
  return (
    <>
      <ModalWrapper>
        <BankAccountWrapper></BankAccountWrapper>
      </ModalWrapper>
    </>
  );
};

const CardModal = () => {
  return (
    <>
      <ModalWrapper>
        <CardAccountWrapper>
          <ModalHead>Select a bank card</ModalHead>
          <ModalInfo>
            You dont have a debit card linked to your account
          </ModalInfo>
          <ModalSelectIconWrapper>
            <img src={plus} alt="add" />
            <AddText>Add a new debit card</AddText>
          </ModalSelectIconWrapper>
          <ProceedButton>PROCEED</ProceedButton>
        </CardAccountWrapper>
      </ModalWrapper>
    </>
  );
};

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
const CardAccountWrapper = styled.div`
  background: white;
  border-radius: 8px;
  height: 70%;
  width: 30%;
  padding: 10px 30px 10px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ModalHead = styled.div`
font-weight: 800;
font-family: ${Fonts.Regular};
text-align: center;
width: 80%:
margin:0px 0px 10px 0px;
font-size: 1.5rem;
`;

const ModalInfo = styled.div`
  color: #859cc2;
  font-weight: 300;
  opacity: 0.4;
  font-family: ${Fonts.Regular};
  width: 50%;
  text-align: center;
  padding: 10px 25px 10px 25px;
`;

const ModalSelectIconWrapper = styled.div`
  border-radius: 8px;
  background: #dbfdff;
  width: 80%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const AddText = styled.div`
  font-family: ${Fonts.Regular};
  font-weight: 300;
  opacity: 0.4;
`;

const BankWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: ${Fonts.Regular};
`;

const ProceedButton = styled.div`
color: white;
width: 80%;
padding: 15px;
border-radius: 8px;
cursor:pointer;
background: #C5CBD4;
text-align: center;
font-family: ${Fonts.Regular};
margin-top: 30px;
font-size: 1.2rem;
font-weight: 900;
`

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

export default TargetSavings;
