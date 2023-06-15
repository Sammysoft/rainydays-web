import React from "react";
import styled from "styled-components";
import { Colors, Fonts } from "../Assets/colors";
import logo from "../Assets/logo_primary.png";
import base from "../Assets/base_outline.png";
import top from "../Assets/top_outline.png";
import { Button } from "../Elements/Button";
import { InputField } from "../Elements/InputText";
import congrats from "../Assets/congrats.png";
import { useNavigate } from "react-router-dom";

const PageWrapper = styled.div`
  margin: 10vh 10vw;
`;
const NavHead = styled.div`
  width: 100%;
  padding: 30px 0px;
`;
const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const FirstElement = styled.div`
  width: 25%;
  font-family: ${Fonts.Regular};
  font-size: 2.5rem;
`;

const SecondElement = styled.div`
  width: 40%;
  font-family: ${Fonts.Regular};
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ThirdElement = styled.div`
  width: 25%;
  font-family: ${Fonts.Regular};
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 10vh;
`;

const ActiveIndicator = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
`;

const ActiveText = styled.div`
  font-family: ${Fonts.Regular};
  padding: 0px 8px;
  color: ${(props) => props.color};
  font-size: 0.5rem;
  font-weight: 800;
`;
const Divider = styled.div`
  border-left: 2px solid #f4f8ff;
  height: 5vh;
  width: 100%;
  margin-left: 5px;
`;

const IndicatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const BaseImageWatermark = styled.img`
  position: absolute;
  bottom: 0px;
`;

const TopImageWatermark = styled.img`
  position: absolute;
  right: 0px;
  top: 0px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40vh;
`;

const SuccessText = styled.div`
  width: fit-content;
  font-family: ${Fonts.Regular};
  font-weight: 800;
  font-size: 2rem;
  color: ${Colors.PRIMARY};
`;

const LittleSuccessText = styled.div`
  font-family: ${Fonts.Regular};
  font-size: 1rem;
`;

const PasswordResetPage = () => {
  const [reset, setReset] = React.useState(false);
  const [verified, setVerified] = React.useState(false);
  const navigate = useNavigate();

  return (
    <>
      <TopImageWatermark src={top} alt="watermark" />
      <PageWrapper>
        <NavHead>
          <img src={logo} alt="logo_view" />
        </NavHead>
        {verified === true ? (
          <>
            <Wrapper>
              <img src={congrats} alt="congratulations" />
              <SuccessText>Password Changed</SuccessText>
              <LittleSuccessText>
                Kindly sign in to your account
              </LittleSuccessText>
              <Button
                onClick={() => {
                  navigate("/signin");
                }}
              >
                SIGN IN
              </Button>
            </Wrapper>
          </>
        ) : (
          <>
            <ContentWrapper>
              <FirstElement>Let's get you back on track</FirstElement>
              <SecondElement>
                <span style={{ fontSize: "1rem" }}>
                  KINDLY PUT IN YOUR EMAIL
                </span>
                {reset === true ? (
                  <>
                    <InputField placeholder="Default password sent to you" />
                    <InputField type="password" placeholder="New password" />
                    <InputField
                      type="password"
                      placeholder="Confirm new password"
                    />
                  </>
                ) : (
                  <>
                    <InputField placeholder="Email" />
                  </>
                )}
                <div
                  style={{
                    textAlign: "right",
                    width: "100%",
                    display: "flex",
                    alignItems: "right",
                    flexDirection: "row",
                    justifyContent: "right",
                  }}
                >
                  {reset === true ? (
                    <>
                      <Button onClick={() => setVerified(true)}>
                        CONTINUE
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button onClick={() => setReset(true)}>CONTINUE</Button>
                    </>
                  )}
                </div>
              </SecondElement>
              <ThirdElement>
                <IndicatorWrapper>
                  <ActiveIndicator color={"#0000A7"}></ActiveIndicator>
                  <ActiveText color={"#0000A7"}>Input Email</ActiveText>
                </IndicatorWrapper>
                <Divider></Divider>
                <IndicatorWrapper>
                  {reset === true ? (
                    <>
                      <ActiveIndicator color={"#0000A7"}></ActiveIndicator>
                      <ActiveText color={"#0000A7"}>Password Reset</ActiveText>
                    </>
                  ) : (
                    <>
                      <ActiveIndicator color={"#D2E3FF"}></ActiveIndicator>
                      <ActiveText color={"#D2E3FF"}>Password Reset</ActiveText>
                    </>
                  )}
                </IndicatorWrapper>
              </ThirdElement>
            </ContentWrapper>
          </>
        )}
      </PageWrapper>
      <BaseImageWatermark src={base} alt="watermark" />
    </>
  );
};

export default PasswordResetPage;
