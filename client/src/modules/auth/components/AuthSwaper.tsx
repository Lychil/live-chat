import styled, { css } from "styled-components"
import { border, colors, font, transition } from "../../../common/styles/styleConstants";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../../routes/routes";
import { useEffect, useState } from "react";
import { AuthTypes } from "../types";

const swaperPadding = 5;

const Wrapper = styled('div')`
position: relative;
height: 50px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${colors.grayMain};
border-radius: ${border.radius.big};
padding: ${swaperPadding}px;
margin-bottom: 20px;
`;

const Swaper = styled('div')<{$active: AuthTypes}>`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
top: ${swaperPadding}px;
width: 50%;
// What is it? -_-
${props => props.$active === "login" ? css`margin-left: 0;` : css`margin-left: ${`calc(50% - ${swaperPadding * 2}px)`};`}
height: ${`calc(100% - ${swaperPadding * 2}px)`};
color: ${colors.blackTotal};
font-size: ${font.sizes.title};
font-weight: ${font.weights.bold};
background-color: ${colors.whiteTotal};
border-radius: ${border.radius.big};
transition: ${transition.slow};
`;

const SwaperTrigger = styled(Link)`
width: 50%;
text-align: center;
color: ${colors.blackTotal};
font-size: ${font.sizes.title};
font-weight: ${font.weights.bold};
`;

const regPath = routes.regPath;
const loginPath = routes.loginPath;

export default function AuthSwaper() {
    const location = useLocation();
    const [active, setActive] = useState<AuthTypes>("login");

    useEffect(() => {
        if (location.pathname === regPath) setActive("reg");
        else setActive("login");
    }, [location])

    return (
        <Wrapper>
            <SwaperTrigger to={loginPath}>Вход</SwaperTrigger>
            <SwaperTrigger to={regPath}>Регистрация</SwaperTrigger>
            <Swaper $active={active}>
                {active === "login" ? "Вход" : "Регистрация"}
            </Swaper>
        </Wrapper>
    )
}
