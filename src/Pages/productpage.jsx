import React from "react";
import DashboardWrapper from "../Elements/DashoardWrapper";
import DashboardNav from "../components/dashboard-nav";
import ProductDashboard from "../components/Products/Dashboard";

const ProductPage = () => {
  return (
    <>
      <DashboardWrapper
        leftside={<DashboardNav />}
        rightside={<ProductDashboard />}
      />
    </>
  );
};

export default ProductPage;
