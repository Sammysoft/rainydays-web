import React from "react";
import DashboardWrapper from "../Elements/DashoardWrapper";
import DashboardNav from "../components/dashboard-nav";
import Dashboard from "../components/dashboard";

const DashboardPage = () => {
  return (
    <>
      <DashboardWrapper leftside={<DashboardNav />} rightside={<Dashboard />} />
    </>
  );
};

export default DashboardPage;
