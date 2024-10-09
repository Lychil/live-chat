import styled from "styled-components"
import { border, colors, font } from "../../../../../common/styles/styleConstants";
import { useExitMutation } from "../../../../../store/reducers/user/userApi";

const Wrapper = styled('div')`
display: flex;
gap: 10px;
`;

const Icon = styled('div')`
width: 30px;
aspect-ratio: 1;
border-radius: ${border.radius.circle};
background-color: ${colors.grayMain};
`;

const Exit = styled('button')`
margin: auto 0;
font-size: ${font.sizes.main};
font-weight: ${font.weights.semiBold};
`;

export default function Profile() {
    const [exit] = useExitMutation();

    const handleExit = async () => {
        await exit();
    }

    return (
        <Wrapper>
            <Icon></Icon>
            <Exit onClick={handleExit}>Exit</Exit>
        </Wrapper>
    )
}
