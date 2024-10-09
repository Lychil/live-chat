import styled from "styled-components";
import { border, colors, font, transition } from "../../../../../common/styles/styleConstants";

const Wrapper = styled('div')`
display: flex;
column-gap: 10px;
padding: 10px;
height: 50px;
background-color: ${colors.whiteTotal};
`;

const Input = styled('input')`
width: 100%;
padding: 10px;
font-size: ${font.sizes.main};
font-weight: ${font.weights.medium};
color: ${colors.blackTotal};
border: ${border.styles.blackSmall};
border-radius: ${border.radius.main};
background-color: ${colors.grayMain};
`;

const Button = styled('button')`
height: 100%;
padding: 0 10px;
border: ${border.styles.blackSmall};
border-radius: ${border.radius.main};
font-size: ${font.sizes.main};
font-weight: ${font.weights.semiBold};
color: ${colors.whiteTotal};
background-color: ${colors.blackTotal};
transition: ${transition.fast};

&:hover {
    color: ${colors.blackTotal};
    background-color: ${colors.whiteTotal};
}
`;

export default function InputMessage() {
    return (
        <Wrapper>
            <Input placeholder="Введите сообщение..." />
            <Button>Send</Button>
        </Wrapper>
    )
}
