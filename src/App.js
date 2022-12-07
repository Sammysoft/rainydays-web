import React from "react";
import { Routes, Route } from "react-router";
import DashboardPage from "./Pages/dashboardpage";
import OnboardPage from "./Pages/onboardpage";
import PasswordResetPage from "./Pages/passwordresetpage.";
import SignInPage from "./Pages/signinpage";

function App() {
  return(
    <>
      <Routes>
        <Route path="/onboard" exact element={<OnboardPage/>} />
        <Route path="/signin" exact element={<SignInPage />} />
        <Route path="/reset-password" exact element={<PasswordResetPage />} />
        <Route path="/dashboard" exact element={<DashboardPage />} />
      </Routes>
    </>
  )
}

export default App;
