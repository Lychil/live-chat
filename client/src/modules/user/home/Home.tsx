import styled from "styled-components";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const Wrapper = styled('div')`
height: 100vh;
display: grid;
grid-template-rows: auto 1fr;
`;

export default function Home() {

    return (
        <Wrapper>
            <Header />
            <Main />
        </Wrapper>
    )
}
