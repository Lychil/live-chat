import styled from "styled-components";
import Chat from "./Chat";
import SideBar from "./SideBar";
import { colors } from "../../../../../common/styles/styleConstants";
import { Container } from "../../../../../common/styles/styles";

const Wrapper = styled('main')`
flex-grow: 1;
`;

const InnerWrapper = styled(Container)`
height: 100%;
display: grid;
grid-template-columns: auto 1fr;
background-color: ${colors.whiteTotal};
`;

export default function Main() {
    return (
        <Wrapper>
            <InnerWrapper>
                <SideBar />
                <Chat />
            </InnerWrapper>
        </Wrapper>
    )
}
