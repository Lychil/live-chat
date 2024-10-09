import styled from "styled-components"
import { border, colors } from "../../../../../common/styles/styleConstants";

const Wrapper = styled('div')`
width: 30px;
aspect-ratio: 1;
border-radius: ${border.radius.circle};
background-color: ${colors.grayMain};
`;

export default function Profile() {
    return (
        <Wrapper></Wrapper>
    )
}
