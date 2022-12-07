import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import logo from "../Assets/logo.png";
import dash from "../Assets/dashboard.png";
import contribution from "../Assets/contributions.png";
import wallet from "../Assets/wallet.png";
import settings from "../Assets/settings.png";
import info from "../Assets/info.png";
import product from "../Assets/product.png";
import { Fonts } from "../Assets/colors";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 90%;
  margin: 5% 5px;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  flex-direction: column;
`;

const NavItem = styled.div`
  width: 100%;
`;
const NavItemIcon = styled.img`
  cursor: pointer;
`;

const NavItemText = styled.span`
  font-family: ${Fonts.Regular};
  font-weight: 600;
  font-size: 1rem;
  padding: 0px 20px;
`;

const Support = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70%:
`;

const DashboardNav = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Container>
        <img src={logo} alt="dashboard" />
        <NavItems>
          <Link
            to="/dashboard"
            style={{
              textDecorationLine: "none",
              textDecoration: "none",
              color: "white",
              display: "flex",
              gap: "20%",
              width: "70%",
              cursor: "pointer",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <NavItem
              style={
                location.pathname === "/dashboard"
                  ? {
                      backgroundColor: "white",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }
                  : {
                      backgroundColor: "transparent",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }
              }
            >
              <NavItemIcon src={dash} alt="icon-dashboard" />
              <NavItemText
                style={
                  location.pathname === "/dashboard"
                    ? { color: "#0000A7" }
                    : { color: "white" }
                }
              >
                Dashboard
              </NavItemText>
            </NavItem>
          </Link>
          <Link
            to="/products"
            style={{
              textDecorationLine: "none",
              textDecoration: "none",
              color: "white",
              display: "flex",
              gap: "20%",
              width: "70%",
              margin: "3vh 0px",
              cursor: "pointer",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <NavItem
              style={
                location.pathname === "/products"
                  ? {
                      backgroundColor: "white",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }
                  : {
                      backgroundColor: "transparent",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }
              }
            >
              <NavItemIcon src={product} alt="icon-product" />
              <NavItemText
                style={
                  location.pathname === "/products"
                    ? { color: "#0000A7" }
                    : { color: "white" }
                }
              >
                Products
              </NavItemText>
            </NavItem>
          </Link>
          <Link
            to="/contributions"
            style={{
              textDecorationLine: "none",
              textDecoration: "none",
              color: "white",
              display: "flex",
              gap: "20%",
              width: "70%",
              margin: "3vh 0px",
              cursor: "pointer",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <NavItem
              style={
                location.pathname === "/contributions"
                  ? {
                      backgroundColor: "white",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }
                  : {
                      backgroundColor: "transparent",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }
              }
            >
              <NavItemIcon src={contribution} alt="icon-contribution" />
              <NavItemText
                style={
                  location.pathname === "/contributions"
                    ? { color: "#0000A7" }
                    : { color: "white" }
                }
              >
                Contributions
              </NavItemText>
            </NavItem>
          </Link>
          <Link
            to="/wallet"
            style={{
              textDecorationLine: "none",
              textDecoration: "none",
              color: "white",
              display: "flex",
              gap: "20%",
              width: "70%",
              margin: "3vh 0px",
              cursor: "pointer",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <NavItem
              style={
                location.pathname === "/wallet"
                  ? {
                      backgroundColor: "white",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }
                  : {
                      backgroundColor: "transparent",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }
              }
            >
              <NavItemIcon src={wallet} alt="icon-wallet" />
              <NavItemText
                style={
                  location.pathname === "/wallet"
                    ? { color: "#0000A7" }
                    : { color: "white" }
                }
              >
                Wallet
              </NavItemText>
            </NavItem>
          </Link>
          <Link
            to="/settings"
            style={{
              textDecorationLine: "none",
              textDecoration: "none",
              color: "white",
              display: "flex",
              gap: "20%",
              width: "70%",
              margin: "3vh 0px",
              cursor: "pointer",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <NavItem
              style={
                location.pathname === "/settings"
                  ? {
                      backgroundColor: "white",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }
                  : {
                      backgroundColor: "transparent",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }
              }
            >
              <NavItemIcon src={settings} alt="icon-settings" />
              <NavItemText
                style={
                  location.pathname === "/settings"
                    ? { color: "#0000A7" }
                    : { color: "white" }
                }
              >
                Settings
              </NavItemText>
            </NavItem>
          </Link>
        </NavItems>
        <Link
          to="/support"
          style={{
            textDecorationLine: "none",
            textDecoration: "none",
            color: "white",
            width: "50%",
            cursor: "pointer",
            padding: "20px 0px"
          }}
        >
          <Support>
            <NavItem
              style={
                location.pathname === "/support"
                  ? {
                      backgroundColor: "white",
                     padding: "5px 10px",
                      borderRadius: "5px",
                    }
                  : {
                      backgroundColor: "transparent",
                     padding: "5px 10px",
                      borderRadius: "5px",
                    }
              }
            >
              <NavItemIcon src={info} alt="icon-support" />
              <NavItemText
                style={
                  location.pathname === "/support"
                    ? { color: "#0000A7" }
                    : { color: "white" }
                }
              >
                Support
              </NavItemText>
            </NavItem>
          </Support>
        </Link>
      </Container>
    </>
  );
};

export default DashboardNav;
