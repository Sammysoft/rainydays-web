import React from "react";
import NavBar from "../NavBar";
import styled from "styled-components";
import { Fonts } from "../../Assets/colors"
import TargetSavings from "./TargetSavings";


const StatusElement = () => {
    return <Status>Target Savings</Status>;
  };

const ProductDashboard = ()=>{
    return(
        <>
            <Wrapper>
                <NavBar element={<StatusElement />}/>
                <TargetSavings />
            </Wrapper>
        </>
    )
}


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