import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

a {
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0; 
}

input {
    all: unset;
    box-sizing: border-box;
}

button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;  
    font: inherit;
    color: inherit;
    text-align: center;
    cursor: pointer;
    appearance: none;
}
`;