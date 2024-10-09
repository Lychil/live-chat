import styled from "styled-components";
import { border, colors, font } from "../../../../../common/styles/styleConstants";
import searchImg from "../../../../../common/images/svg/search.svg";

const Wrapper = styled('div')`
display: flex;
column-gap: 10px;
margin-bottom: 10px;
`;

const Input = styled('input')`
width: 100%;
padding: 10px;
font-size: ${font.sizes.main};
font-weight: ${font.weights.medium};
color: ${colors.blackTotal};
border: ${border.styles.blackSmall};
border-radius: ${border.radius.main};
background-color: ${colors.grayMain};
`;

const Icon = styled('img')`
width: 30px;
aspect-ratio: 1;
`;

export default function Search() {
    return (
        <Wrapper>
            <Input placeholder="Поиск пользователей..."/>
            <Icon src={searchImg} />
        </Wrapper>
    )
}
