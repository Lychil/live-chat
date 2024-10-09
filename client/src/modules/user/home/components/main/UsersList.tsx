import styled from "styled-components";
import UserItem from "./UserItem";

const Wrapper = styled('div')``;

const list = [1, 2, 3, 4, 5];

export default function UsersList() {
    return (
        <Wrapper>
            {
                list.map((elem) => <UserItem key={elem} />)
            }
        </Wrapper>
    )
}
