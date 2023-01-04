/* eslint-disable */

import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import styled from "styled-components";
import { Colors, Fonts } from "../../Assets/colors";
import TargetSavings from "./TargetSavings";
import { useLocation, useNavigate } from "react-router-dom";
import Loan from "./Loan";

const StatusElement = ({ status }) => {
  return <Status>{status}</Status>;
};

const ProductDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [navigator, setNavigator] = useState("/products/loan");
  console.log(location.pathname);

  useEffect(() => {
    setNavigator(`${location.pathname}`);
  }, [navigator]);
  console.log(navigator);
  switch (navigator) {
    case "/products/loan":
      return (
        <>
          <Wrapper>
            <NavBar element={<StatusElement status={"Loans"} />} />
            <NavigatorWrapper>
              <NavigationElement
                onClick={() => {
                  navigate("/products");
                  setNavigator("/products");
                }}
              >
                Target Savings
              </NavigationElement>
              <NavigationElement
                onClick={() => {
                  navigate("/products/savings");
                  setNavigator("/products/savings");
                }}
              >
                Rotational Savings
              </NavigationElement>
              <NavigationElement
                status={"active"}
                onClick={() => {
                  navigate("/products/loan");
                  setNavigator("/products/loan");
                }}
              >
                Loans
              </NavigationElement>
              <NavigationElement
                onClick={() => {
                  navigate("/products/investment");
                  setNavigator("/products/investment");
                }}
              >
                Investments
              </NavigationElement>
            </NavigatorWrapper>
            <Loan />
          </Wrapper>
        </>
      );
      break;

    default:
      return (
        <>
          <Wrapper>
            <NavBar element={<StatusElement status={"Target Savings"} />} />
            <NavigatorWrapper>
              <NavigationElement
                status={"active"}
                onClick={() => {
                  navigate("/products");
                  setNavigator("/products");
                }}
              >
                Target Savings
              </NavigationElement>
              <NavigationElement
                onClick={() => {
                  navigate("/products/savings");
                  setNavigator("/products/savings");
                }}
              >
                Rotational Savings
              </NavigationElement>
              <NavigationElement
                onClick={() => {
                  navigate("/products/loan");
                  setNavigator("/products/loan");
                }}
              >
                Loans
              </NavigationElement>
              <NavigationElement
                onClick={() => {
                  navigate("/products/investment");
                  setNavigator("/products/investment");
                }}
              >
                Investments
              </NavigationElement>
            </NavigatorWrapper>
            <TargetSavings />
          </Wrapper>
        </>
      );
      break;
  }
};

const NavigatorWrapper = styled.div`
  width: 100%;
  font-family: ${Fonts.Regular};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  margin: 2vh 0px 2vh 0px;
  cursor: pointer;
`;
const NavigationElement = styled.div`
  font-family: ${Fonts.Regular};
  color: ${(props) => (props.status === "active" ? "#0000A7" : Colors.GREY)};
  opacity: ${(props) => (props.status === "active" ? 1 : 0.4)};
  font-weight: 600;
  border-bottom: 3px solid
    ${(props) => (props.status === "active" ? "#0000A7" : Colors.GREY)};
  width: 20%;
  padding-bottom: 10px;
  text-align: center;
`;

const Wrapper = styled.div`
  margin: 20px;
  width: 100%;
`;

const Status = styled.div`
  font-family: ${Fonts.Regular};
  font-weight: 400;
  font-size: 2rem;
`;
export default ProductDashboard;
