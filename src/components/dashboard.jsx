import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import { Colors, Fonts } from "../Assets/colors";
import MoneyCard from "../Elements/MoneyCard";
import contribution from "../Assets/contribution_icon.png";
import savings from "../Assets/savings_icon.png";
import atarodo from "../Assets/atarodo.png";
import boss from "../Assets/boss.png";
import freesaver from "../Assets/freesaver.png";
import leaf from "../Assets/leaf.png";
import Packages from "../Elements/Packages";
import ReferBar from "./ReferBar";
import { InputField } from "../Elements/InputText";
import cancel from "../Assets/svg/cancel.svg";

const Wrapper = styled.div`
  margin: 20px;
  width: 100%;
`;

const Status = styled.div`
  font-family: ${Fonts.Regular};
  font-weight: 400;
  font-size: 2rem;
`;

const CardListingsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  margin: 20px 0px;
`;

const PackagesWrapper = styled.div`
  font-family: ${Fonts.Regular};
  width: 100%;
  margin: 20px 0px;
`;

const PackagesHeader = styled.div`
  font-family: ${Fonts.Regular};
  font-size: 2.5rem;
  width: 100%;
  color: ${Colors.GREY};
  margin: 30px 0px;
  font-weight: 700;
`;

const PackageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CompleteProfileWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  margin: 20px 0px;
`;

const ContributionIcon = () => {
  return (
    <>
      <img src={contribution} alt="contribute" />
    </>
  );
};

const SavingsIcon = () => {
  return (
    <>
      <img src={savings} alt="contribute" />
    </>
  );
};

const StatusElement = () => {
  return <Status>Good Morning, Jane</Status>;
};

const AtarodoIcon = () => {
  return (
    <>
      <img src={atarodo} alt="atarodo" />
    </>
  );
};

const BossIcon = () => {
  return (
    <>
      <img src={boss} alt="boss" />
    </>
  );
};

const FreeIcon = () => {
  return (
    <>
      <img src={freesaver} alt="free" />
    </>
  );
};

const InvestIcon = () => {
  return (
    <>
      <img src={leaf} alt="free" />
    </>
  );
};

const Dashboard = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showBank, setShowBank] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [completed, setCompleted] = useState(Boolean);

  useEffect(() => {
    setCompleted(false);
  }, []);

  return (
    <>
      <Wrapper>
        <NavBar element={<StatusElement />} />
        <CardListingsWrapper>
          <MoneyCard
            name={"TOTAL SAVINGS"}
            background={"#97EA70"}
            icon={<SavingsIcon />}
            amount={"N0.00"}
          />
          <MoneyCard
            name={"TOTAL CONTRIBUTIONS"}
            background={"#3779DC"}
            icon={<ContributionIcon />}
            amount={"N0.00"}
          />
          <MoneyCard
            name={"TOTAL INVESTMENTS"}
            background={"#D2E3FF"}
            icon={<InvestIcon />}
            amount={"N0.00"}
          />
        </CardListingsWrapper>
        <PackagesWrapper>
          {completed === true ? (
            <>
              <PackagesHeader>Popular Packages</PackagesHeader>
              <PackageWrapper>
                <Packages name={"Atarodo gang"} icon={<AtarodoIcon />} />
                <Packages name={"Boss Moves"} icon={<BossIcon />} />
                <Packages name={"Freesaver Pack"} icon={<FreeIcon />} />
                <ReferBar />
              </PackageWrapper>
            </>
          ) : (
            <>
              <PackagesHeader>Complete your profile</PackagesHeader>
              <PackageWrapper>
                <CompleteProfileWrapper>
                  <ProfileWrapper
                    onClick={() => {
                      setShowProfile(true);
                    }}
                  >
                    {showProfile === true ? <>{PersonalProfile()}</> : <></>}
                    <Left>
                      <CircleButton />
                      {"We want to know you better"}
                    </Left>
                    <Right>COMPLETE NOW</Right>
                  </ProfileWrapper>

                  <ProfileWrapper
                    onClick={() => {
                      setShowBank(true);
                    }}
                  >
                    {showBank === true ? <>{BankDetails()}</> : <></>}
                    <Left>
                      <CircleButton onClick={()=>{setShowBank(false)}}/>
                      {"Kindly add your bank details"}
                    </Left>
                    <Right>COMPLETE NOW</Right>
                  </ProfileWrapper>

                  <ProfileWrapper
                    onClick={() => {
                      setShowPin(true);
                    }}
                  >
                    {showPin === true ? <>{Transaction()}</> : <></>}
                    <Left>
                      <CircleButton onClick={()=>{setShowPin(false)}}/>
                      {"Set your transaction pin"}
                    </Left>
                    <Right>COMPLETE NOW</Right>
                  </ProfileWrapper>
                </CompleteProfileWrapper>
                <ReferBar />
              </PackageWrapper>
            </>
          )}
        </PackagesWrapper>
      </Wrapper>
    </>
  );
};

const PersonalProfile = () => {
  return (
    <>
      <ModalWrapper>
        <Modal>
          <CancelButton
            src={cancel}
            onClick={() => {
              window.location.reload();
            }}
          />
          <Header>Let's get to know more about you</Header>
          <FormWrapper>
            <FlexBox>
              <InputField placeholder={"First Name"} />
              <InputField placeholder={"Last Name"} />
            </FlexBox>
            <InputField placeholder={"Phone Number"} />
            <InputField placeholder={"Date of Birth"} />
          </FormWrapper>
          <ButtonWrap>
            <Button>COMPLETE</Button>
          </ButtonWrap>
        </Modal>
      </ModalWrapper>
    </>
  );
};

const BankDetails = () => {
  return (
    <>
      <ModalWrapper>
        <Modal>
          <CancelButton
            src={cancel}
            onClick={() => {
              window.location.reload();
            }}
          />
          <Header>Now, let's get your bank details</Header>
          <FormWrapper>
            <FlexBox>
              <InputField placeholder={"Account Number"} />
              <InputField placeholder={"Bank Name"} />
            </FlexBox>
            <InputField placeholder={"Customer's name"} />
            <InputField placeholder={"BVN"} />
          </FormWrapper>
          <ButtonWrap>
            <Button>COMPLETE</Button>
          </ButtonWrap>
        </Modal>
      </ModalWrapper>
    </>
  );
};

const Transaction = () => {
  return (
    <>
      <ModalWrapper>
        <Modal>
          <CancelButton
            src={cancel}
            onClick={() => {
              window.location.reload();
            }}
          />
          <Header>Okay, Let's set your transaction pin</Header>
          <FormWrapper>
            <InputField placeholder={"Password"} type={"password"} />
            <InputField placeholder={"Transaction pin"} type={"password"} />
            <InputField
              placeholder={"Confirm transaction pin"}
              type={"password"}
            />
          </FormWrapper>
          <ButtonWrap>
            <Button>COMPLETE</Button>
          </ButtonWrap>
        </Modal>
      </ModalWrapper>
    </>
  );
};



const ProfileWrapper = styled.div`
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: ${Fonts.Regular};
  background: ${Colors.NOTIF_PRIMARY};
  width: 100%;
  margin: 5px 0px;
`;

const Left = styled.div`
  width: 70%;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: s space-between;
  align-items: center;
`;
const CircleButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid red;
  margin-right: 10px;
`;
const Right = styled.div`
  width: 25%;
  font-family: ${Fonts.Regular};
  color: ${Colors.PRIMARY};
  font-weight: 900;
`;

const CancelButton = styled.img`
  position: absolute;
  z-index: 1;
  top: 30px;
  right: 30px;
`;
const Button = styled.div`
  padding: 10px 15px;
  font-family: ${Fonts.Regular};
  color: ${Colors.WHITE};
  background-color: ${Colors.PRIMARY};
  border-radius: 7px;
  font-weight: 900;
  font-size: 1rem;
  cursor: pointer;
  width: fit-content;
  margin: 10px 0px 10px 10px;
  float: right;
  margin-right: 10px;
`;
const ButtonWrap = styled.div`
  width: 100%;
  float: right;
`;

const ModalWrapper = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
top: 0px;
left:0px;
background: rgba(0,0,0,0.4);
display: flex;
flex;direction: column;
align-items: center;
justify-content: space-evenly;
`;
const Modal = styled.div`
  background: white;
  width: 35%;
  height: 65%;
  border-radius: 8px;
  padding: 50px;
  position: relative;
`;

const Header = styled.div`
  font-family: ${Fonts.Regular};
  font-weight: 900;
  color: ${Colors.PRIMARY_DEEP};
  padding: 10px 0px 10px 0px;
  font-size: 2.5rem;
  width: 80%;
`;

const FormWrapper = styled.div`
  width: 100%;
`;

const FlexBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default Dashboard;
