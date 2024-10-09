import styled from "styled-components";
import Search from "./Search";
import UsersList from "./UsersList";

const Wrapper = styled('aside')`
width: 300px;
padding: 10px;
`;

export default function SideBar() {
    return (
        <Wrapper>
            <Search />
            <UsersList />
        </Wrapper>
    )
}
