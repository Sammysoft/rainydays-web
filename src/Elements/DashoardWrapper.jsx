import React from "react";
import styled from "styled-components";
import { Colors } from "../Assets/colors";

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justfy-content: space-between;
  align-items: center;
  height: 100vh;
`;

const LeftSide = styled.div`
  width: 25%;
  background-color: ${Colors.PRIMARY};
  height: 100%;
`;

const RightSide = styled.div`
  width: 70%;
  height: 100%;
`;

const DashboardWrapper = ({ leftside, rightside }) => {
  return (
    <>
      <PageWrapper>
        <LeftSide>{leftside}</LeftSide>
        <RightSide>{rightside}</RightSide>
      </PageWrapper>
    </>
  );
};

export default DashboardWrapper;
