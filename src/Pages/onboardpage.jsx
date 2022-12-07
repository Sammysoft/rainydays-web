import React from "react";
import PageWrapper from "../Elements/PageWrapper";
import logo from "../Assets/logo.png";
import SignUpForm from "../components/signupform";

const LogoImage = () => {
  return (
    <>
      <img src={logo} alt="light" />
    </>
  );
};

const OnboardPage = () => {
  return (
    <>
      <PageWrapper
        left_element={<LogoImage />}
        right_element={<SignUpForm />}
      />
    </>
  );
};

export default OnboardPage;
