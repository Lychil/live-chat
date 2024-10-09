import styled from "styled-components";
import { colors } from "../../../../../common/styles/styleConstants";
import InputMessage from "./InputMessage";

const Wrapper = styled('div')`
height: 100%;
display: grid;
grid-template-rows: 1fr auto;
`;

const Messages = styled('div')`
flex-grow: 1;
background-color: ${colors.grayDark};
`;

export default function Chat() {
    return (
        <Wrapper>
            <Messages></Messages>
            <InputMessage />
        </Wrapper>
    )
}
