import styled from "styled-components";
import { border, colors, font } from "../../../../../common/styles/styleConstants";

const Wrapper = styled('div')`
display: flex;
padding: 5px 0;
column-gap: 10px;
background-color: ${colors.whiteTotal};
border-bottom: ${border.styles.grayDarkSmall};
`;

const Icon = styled('div')`
width: 30px;
aspect-ratio: 1;
margin: auto 0;
border-radius: ${border.radius.circle};
background-color: ${colors.grayDark};
`;

const Info = styled('div')``;

const Author = styled('p')`
font-weight: ${font.weights.semiBold};
font-size: ${font.sizes.main};
`;

const LastMessage = styled('p')`
font-size: ${font.sizes.small};
font-weight: ${font.weights.medium};
color: ${colors.grayDark};
`;

export default function UserItem({name, message = ''}: {name: string, message?: string}) {
    return (
        <Wrapper>
            <Icon></Icon>
            <Info>
                <Author>{name}</Author>
                <LastMessage>{message}</LastMessage>
            </Info>
        </Wrapper>
    )
}
