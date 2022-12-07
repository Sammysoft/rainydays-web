import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import { Colors, Fonts } from "../Assets/colors";
import MoneyCard from "../Elements/MoneyCard";
import contribution from "../Assets/contribution_icon.png";
import savings from "../Assets/savings_icon.png";
import atarodo from "../Assets/atarodo.png";
import boss from "../Assets/boss.png";
import freesaver from "../Assets/freesaver.png";
import Packages from "../Elements/Packages";
import ReferBar from "./ReferBar";

const Wrapper = styled.div`
  margin: 20px;
  width: 100%;
`;

const Status = styled.div`
  font-family: ${Fonts.Regular};
  font-weight: 600;
  font-size: 1.3rem;
`;

const CardListingsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  margin: 20px 0px;
`;

const PackagesWrapper = styled.div`
  font-family: ${Fonts.Regular};
  width: 100%;
  margin: 20px 0px;
`;

const PackagesHeader = styled.div`
  font-family: ${Fonts.Regular};
  font-size: 2.5rem;
  width: 100%;
  color: ${Colors.GREY};
  margin: 30px 0px;
  font-weight: 700;
`;

const PackageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ContributionIcon = () => {
  return (
    <>
      <img src={contribution} alt="contribute" />
    </>
  );
};

const SavingsIcon = () => {
  return (
    <>
      <img src={savings} alt="contribute" />
    </>
  );
};

const StatusElement = () => {
  return <Status>Good Morning, Jane</Status>;
};

const AtarodoIcon = () => {
  return (
    <>
      <img src={atarodo} alt="atarodo" />
    </>
  );
};

const BossIcon = () => {
  return (
    <>
      <img src={boss} alt="boss" />
    </>
  );
};

const FreeIcon = () => {
  return (
    <>
      <img src={freesaver} alt="free" />
    </>
  );
};

const Dashboard = () => {
  return (
    <>
      <Wrapper>
        <NavBar element={<StatusElement />} />
        <CardListingsWrapper>
          <MoneyCard
            name={"TOTAL SAVINGS"}
            background={"#97EA70"}
            icon={<SavingsIcon />}
            amount={"N0.00"}
          />
          <MoneyCard
            name={"TOTAL CONTRIBUTIONS"}
            background={"#3779DC"}
            icon={<ContributionIcon />}
            amount={"N0.00"}
          />
          <MoneyCard
            name={"TOTAL INVESTMENTS"}
            background={"#F4F8FF"}
            amount={"N0.00"}
          />
        </CardListingsWrapper>
        <PackagesWrapper>
          <PackagesHeader>Popular Packages</PackagesHeader>
          <PackageWrapper>
            <Packages name={"Atarodo gang"} icon={<AtarodoIcon />} />
            <Packages name={"Boss Moves"} icon={<BossIcon />} />
            <Packages name={"Freesaver Pack"} icon={<FreeIcon />} />
            <ReferBar />
          </PackageWrapper>
        </PackagesWrapper>
      </Wrapper>
    </>
  );
};

export default Dashboard;
