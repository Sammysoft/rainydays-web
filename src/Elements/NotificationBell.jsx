import React from "react";
import styled from "styled-components";
import { Colors } from "../Assets/colors";
import bell from "../Assets/svg/bell.svg"


const Wrapper = styled.div`
width: fit-content;
position: relative;
height: fit-content;
`
const Counter = styled.div`
border-radius: 20px;
background-color: ${Colors.RED};
width: 20px;
height: 20px;
color: white;
position: absolute;
top: -4px;
right: -4px;
text-align : center;
`

const NotificationBell = ({counter}) =>{
    return(
        <>
        <Wrapper>
            <img src={bell} alt="bell" />
            <Counter>{counter}</Counter>
        </Wrapper>
        </>
    )
}

export default NotificationBell;