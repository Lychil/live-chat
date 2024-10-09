import styled from "styled-components";
import { border, colors, font } from "../../../../../common/styles/styleConstants";
import searchImg from "../../../../../common/images/svg/search.svg";
import { useGetSearchUsersQuery } from "../../../../../store/reducers/search/searchApi";
import { useEffect, useState } from "react";
import UserItem from "./UserItem";

const Wrapper = styled('div')`
position: relative;
display: flex;
column-gap: 10px;
margin-bottom: 10px;
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

const Icon = styled('img')`
width: 30px;
aspect-ratio: 1;
`;

const List = styled('div')`
position: absolute;
width: 100%;
bottom: 0;
left: 0;
border: ${border.styles.grayDarkSmall};
transform: translateY(100%);
`;

export default function Search() {
    const [value, setValue] = useState('');
    const { data } = useGetSearchUsersQuery(value);

    return (
        <Wrapper>
            <Input value={value} onChange={e => setValue(e.target.value)} placeholder="Поиск пользователей..." />
            <Icon src={searchImg} />
            {data ?
                (data.length !== 0 &&
                    <List>
                        {
                            data.map((elem, i) => <UserItem name={elem.name} key={i} />)
                        }
                    </List>
                )
                : null
            }
        </Wrapper>
    )
}
