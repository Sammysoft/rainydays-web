import React from "react";
import styled from "styled-components";
import { Colors, Fonts } from "../Assets/colors";
import ReferButton from "../Elements/ReferButton";
import refer from "../Assets/refer.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.REFER};
  height: 100%;
  width: 25%;
  border-radius: 8px;
`;

const LeftSide = styled.div`
  margin: 20px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;
`;
const RightSide = styled.div`
  height: 30vh;
  margin: 0px;
  padding: 0px;
  position: relative;
  width: 40%;
`;

const Image = styled.img`
  position: absolute;
  right: 0px;
  bottom: 0px;
`;

const Text = styled.div`
  font-family: ${Fonts.Regular};
  font-weight: 600;
  color: ${Colors.GREY};
  font-size: 1rem;
  margin-bottom: 20px;
`;

const ReferBar = () => {
  return (
    <>
      <Wrapper>
        <LeftSide>
          <Text>There is more for you when you refer!</Text>
          <ReferButton text={"REFER NOW"} />
        </LeftSide>
        <RightSide>
          <Image src={refer} alt="refer" />
        </RightSide>
      </Wrapper>
    </>
  );
};

export default ReferBar;
