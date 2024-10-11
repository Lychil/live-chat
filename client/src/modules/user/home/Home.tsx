import styled from "styled-components";
import Main from "./components/main/Main";
import Header from "./components/header/Header";

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
