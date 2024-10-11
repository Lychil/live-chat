import styled from "styled-components";
import { border, colors, font, transition } from "../../../../../common/styles/styleConstants";
import { useGetUserInfoQuery } from "../../../../../store/reducers/user/userApi";

const Wrapper = styled('div')`
cursor: pointer;
display: flex;
padding: 5px 0;
column-gap: 10px;
background-color: ${colors.whiteTotal};
border-bottom: ${border.styles.grayDarkSmall};
transition: ${transition.fast};

&:hover {
    background-color: ${colors.grayLight};
}
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

export default function UserItem({id}: {id: number}) {
    const {data: user} = useGetUserInfoQuery(id);

    return (
        <Wrapper>
            <Icon></Icon>
            <Info>
                <Author>{user && user.name}</Author>
            </Info>
        </Wrapper>
    )
}
