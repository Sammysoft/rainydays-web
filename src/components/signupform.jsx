/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { Fonts, Colors } from "../Assets/colors";
import { Button } from "../Elements/Button";
import { InputField } from "../Elements/InputText";
import { useNavigate } from "react-router-dom";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  width: 80%;
  height: 70%;
`;

const HeadText = styled.div`
  text-align: left;
  font-family: ${Fonts.Regular};
  font-weight: 700;
  font-size: 3rem;
  width: 80%;
  margin: 10px 0px;
`;

const LittleText = styled.div`
  text-align: left;
  font-family: ${Fonts.Regular};
  font-weight: 400;
  font-size: 1rem;
  width: 80%;
  margin: 10px 0px;
`;

const InputBoxWrapper = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0px;
`;
const PinBox = styled.input`
  width: 10%;
  border-radius: 9px;
  border: 1px solid ${Colors.INPUT_BACKGROUND};
  background: ${Colors.INPUT_BORDER};
  padding: 15px 20px;
`;

const SignUpForm = () => {
  const [email, setEmail] = React.useState("hide");
  const navigate = useNavigate();

  return (
    <>
      {email === "hide" ? (
        <>
          <Wrapper>
            <HeadText>Let's create your new account</HeadText>
            <FormWrapper>
              <InputField type="text" placeholder="Your Email" />
              <InputField type="password" placeholder="Password" />
              <InputField type="password" placeholder="Confirm Password" />
            </FormWrapper>
            <Button onClick={() => setEmail("show")}>CONTINUE</Button>
          </Wrapper>
        </>
      ) : (
        <>
          <Wrapper>
            <div>
            <HeadText>Verify your email</HeadText>
            <LittleText>
              Enter the OTP sent to the email you provided
            </LittleText>
            </div>
            <InputBoxWrapper>
              <PinBox type="password"></PinBox>
              <PinBox type="password"></PinBox>
              <PinBox type="password"></PinBox>
              <PinBox type="password"></PinBox>
              <PinBox type="password"></PinBox>
              <PinBox type="password"></PinBox>
            </InputBoxWrapper>
            <Button onClick={()=>{navigate("/signin")}}>CONTINUE</Button>
          </Wrapper>
        </>
      )}
    </>
  );
};

export default SignUpForm;
