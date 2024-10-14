import styled from "styled-components"
import { border, colors, font, transition } from "../../../../../common/styles/styleConstants";
import { useGetUserInfoQuery } from "../../../../../store/reducers/user/userApi";
import { useCreateChatMutation } from "../../../../../store/reducers/chats/chatsApi";

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

const User = styled('p')`
margin: auto 0;
font-weight: ${font.weights.semiBold};
font-size: ${font.sizes.main};
`;

export default function SearchItem({ id }: { id: number }) {
    const { data: user } = useGetUserInfoQuery(id);
    const [createChat] = useCreateChatMutation();

    return (
        <Wrapper onClick={() => createChat(id)}>
            <Icon></Icon>
            <User>{user && user.name}</User>
        </Wrapper>
    )
}
