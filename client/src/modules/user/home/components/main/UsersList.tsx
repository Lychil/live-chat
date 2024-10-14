import styled from "styled-components";
import UserItem from "./UserItem";
import { useGetChatsQuery } from "../../../../../store/reducers/chats/chatsApi";

const Wrapper = styled('div')``;

export default function UsersList() {
    const { data: chats, isLoading } = useGetChatsQuery();

    if (isLoading) <div>isLoading</div>;

    return (
        <Wrapper>
            {
                chats && chats.map((elem) =>
                    <UserItem chatId={elem.buddy + elem.user_id} userId={elem.buddy} key={elem.id} />)
            }
        </Wrapper>
    )
}
