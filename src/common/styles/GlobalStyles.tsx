import { createGlobalStyle } from "styled-components";
import { colors } from "./styleConstants";

export const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: ${colors.grayLight};
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

    &::placeholder {
        color: inherit;
        font-size: inherit;
        font-weight: inherit;
    }
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