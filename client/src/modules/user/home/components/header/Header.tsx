import styled from "styled-components"
import { border, colors } from "../../../../../common/styles/styleConstants";
import { Container } from "../../../../../common/styles/styles";
import Profile from "./Profile";
import Logo from "./Logo";

const Wrapper = styled('header')`
padding: 0 10px;
background-color: ${colors.whiteTotal};
border-bottom: ${border.styles.grayMainSmall};
`;

const InnerWrapper = styled('div')`
height: 50px;
display: flex;
align-items: center;
justify-content: space-between;
`;

export default function Header() {

    return (
        <Wrapper>
            <Container>
                <InnerWrapper>
                    <Logo />
                    <Profile />
                </InnerWrapper>
            </Container>
        </Wrapper>
    )
}
