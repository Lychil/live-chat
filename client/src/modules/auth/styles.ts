import styled from "styled-components";
import { border, colors, font, transition } from "../../common/styles/styleConstants";

export const AuthWrapper = styled('div')`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

export const AuthForm = styled('form')`
width: 350px;
padding: 20px;
background-color: ${colors.whiteTotal};
border: ${border.styles.grayMainSmall};
border-radius: ${border.radius.main};
`;

export const AuthFormContent = styled('div')`
display: flex;
flex-direction: column;
gap: 10px;
`;

export const AuthFormItem = styled('div')`
display: flex;
flex-direction: column;
`;

export const AuthInput = styled('input')`
font-size: ${font.sizes.main};
color: ${colors.grayDark};
border-bottom: ${border.styles.grayMainSmall};
`;

export const AuthLabel = styled('label')`
font-size: ${font.sizes.subtitle};
color: ${colors.grayDark};
`;

export const AuthButton = styled('button')`
margin-top: 20px;
padding: 10px;
color: ${colors.whiteTotal};
font-size: ${font.sizes.subtitle};
border: ${border.styles.blackSmall};
border-radius: ${border.radius.main};
background-color: ${colors.blackTotal};
transition: ${transition.fast};

&:hover {
    color: ${colors.grayDark};
    border: ${border.styles.grayDarkSmall};
    background-color: ${colors.whiteTotal};
}
`;