import { Link } from "react-router-dom"
import styled from "styled-components"
import { routes } from "../../../../../routes/routes";
import logoImg from "../../../../../common/images/svg/logo.svg";

const LogoLink = styled(Link)``;

const LogoImg = styled('img')``;

const homePath = routes.homePath;

export default function Logo() {
    return (
        <LogoLink to={homePath}>
            <LogoImg src={logoImg} />
        </LogoLink>
    )
}
