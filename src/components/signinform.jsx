/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Fonts, Colors } from "../Assets/colors";
import { Button } from "../Elements/Button";
import { InputField } from "../Elements/InputText";

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
  font-weight: 500;
  font-size: 2.5rem;
  width: 80%;
  margin: 10px 0px;
`;

const ForgotPassword = styled.div`
  color: ${Colors.PRIMARY};
  font-family: ${Fonts.Regular};
  font-weight: 800;
  text-align: left;
  width: 100%;
  padding-left: 15px;
`;

const SignInButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const SignUpText = styled.span`
  color: ${Colors.PRIMARY};
  font-family: ${Fonts.Regular};
  font-size: 1rem;
  font-weight: 300;
`;
const SignUp = styled.span`
  color: ${Colors.PRIMARY};
  font-family: ${Fonts.Regular};
  font-size: 1rem;
  font-weight: 800;
`;

const SignInForm = () => {
  return (
    <>
      <Wrapper>
        <HeadText>Welcome, let's get right back in</HeadText>
        <FormWrapper>
          <InputField type="text" placeholder="Your Email" />
          <InputField type="password" placeholder="Password" />
          <ForgotPassword>
            <Link
              to="/reset-password"
              style={{
                textDecorationLine: "none",
                textDecoration: "none",
                color: `${Colors.PRIMARY}`,
              }}
            >
              Forgotten password
            </Link>
          </ForgotPassword>
        </FormWrapper>
        <SignInButtonWrapper>
          <Button>
            <Link
              to="/dashboard"
              style={{
                textDecorationLine: "none",
                textDecoration: "none",
                color: `${Colors.WHITE}`,
              }}
            >
              SIGN IN
            </Link>
          </Button>
          <div>
            <SignUpText>
              New Here?{" "}
              <SignUp>
                <Link
                  to="/onboard"
                  style={{
                    textDecorationLine: "none",
                    textDecoration: "none",
                    color: `${Colors.PRIMARY}`,
                  }}
                >
                  Sign Up
                </Link>
              </SignUp>
            </SignUpText>
          </div>
        </SignInButtonWrapper>
      </Wrapper>
    </>
  );
};

export default SignInForm;
