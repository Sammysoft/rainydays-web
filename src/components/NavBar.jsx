import React from "react";
import styled from "styled-components";
import profile from "../Assets/profile.png";
import down from "../Assets/svg/down.svg";

import GreenButtonIcon from "../Elements/GreenButtonIcon";
import NotificationBell from "../Elements/NotificationBell";

const NavWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ProfileMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 10%;
  cursor: pointer;
`;
const ProfileImageContainer = styled.img`
  border-radius: 50%;
  padding: 5px;
`;

const RightSide = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  width: 70%;
  text-align: left;
`;

const NavBar = ({ element }) => {
  return (
    <>
      <NavWrapper>
        <LeftSide>{element}</LeftSide>
        <RightSide>
          <GreenButtonIcon />
          <NotificationBell counter={5} />
          <ProfileMenu>
            <ProfileImageContainer src={profile} alt="profile" />
            <img src={down} alt="caret" />
          </ProfileMenu>
        </RightSide>
      </NavWrapper>
    </>
  );
};
export default NavBar;
