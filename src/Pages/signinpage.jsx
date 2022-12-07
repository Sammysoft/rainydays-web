import React from "react";
import logo from "../Assets/logo.png";
import PageWrapper from "../Elements/PageWrapper";
import SignInForm from "../components/signinform";

const LogoImage = () => {
  return (
    <>
      <img src={logo} alt="light" />
    </>
  );
};

const SignInPage = () => {
  return (
    <>
      <PageWrapper
        left_element={<LogoImage />}
        right_element={<SignInForm />}
      />
    </>
  );
};

export default SignInPage;
