import styled from "styled-components";
import { colors } from "../../../../../common/styles/styleConstants";

const Wrapper = styled('div')`
height: 100%;
display: grid;
grid-template-rows: 1fr auto;
`;

const Messages = styled('div')`
flex-grow: 1;
background-color: ${colors.grayDark};
`;

const InputMessage = styled('div')`
height: 50px;
background-color: ${colors.whiteTotal};
`;

export default function Chat() {
    return (
        <Wrapper>
            <Messages></Messages>
            <InputMessage></InputMessage>
        </Wrapper>
    )
}
