import { useState } from "react";
import { useState } from "react";
import styled from "styled-components";
import UserItem from "./UserItem";
import { useGetSearchUsersQuery } from "../../../../../store/reducers/search/searchApi";
import { useCreateChatMutation } from "../../../../../store/reducers/chats/chatsApi";
import { border, colors, font } from "../../../../../common/styles/styleConstants";
import searchImg from "../../../../../common/images/svg/search.svg";

const Wrapper = styled('div')`
position: relative;
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

const List = styled('div')`
position: absolute;
width: 100%;
bottom: 0;
left: 0;
border: ${border.styles.grayDarkSmall};
transform: translateY(100%);
`;

const WrapperUser = styled('div')``;

const WrapperUser = styled('div')``;

export default function Search() {
    const [createChat] = useCreateChatMutation();
    const [createChat] = useCreateChatMutation();
    const [value, setValue] = useState('');
    const { data } = useGetSearchUsersQuery(value);

    return (
        <Wrapper>
            <Input value={value} onChange={e => setValue(e.target.value)} placeholder="Поиск пользователей..." />
            <Icon src={searchImg} />
            {data && data.length !== 0 ?
                <List>
                    {
                        data.map((elem, i) => (
                            <WrapperUser onClick={() => createChat(elem.id)} key={i}>
                                <UserItem id={elem.id} />
                            </WrapperUser>
                        ))
                    }
                </List>
                : null
            }
        </Wrapper>
    )
}
