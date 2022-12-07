
import styled from "styled-components";
import { Colors, Fonts } from "../Assets/colors";

export const InputField = styled.input`
border-radius: 9px;
width: 90%;
border: 1px solid ${Colors.INPUT_BACKGROUND};
background: ${Colors.INPUT_BORDER};
padding: 25px;
margin: 10px 0px;
font-family: ${Fonts.Regular}
`;

