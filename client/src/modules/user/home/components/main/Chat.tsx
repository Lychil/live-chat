import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../../../../common/styles/styleConstants";
import InputMessage from "./InputMessage";
import { useAppSelector } from "../../../../../common/hooks/useAppSelector";
import { IMessage, useCreateMessageMutation, useGetMessagesQuery } from "../../../../../store/reducers/messages/messagesApi";

const Wrapper = styled('div')`
height: 100%;
display: grid;
grid-template-rows: 1fr auto;
`;

const Messages = styled('div')`
flex-grow: 1;
background-color: ${colors.grayDark};
`;

const Message = styled('div')`
padding: 5px;
background-color: white;
border-radius: 10px;
margin-bottom: 5px;
`;

// ToDO
export default function Chat() {
    const chatId = useAppSelector(state => state.messagesReducer.id) || -1;
    const {data: messagesApi, refetch} = useGetMessagesQuery(chatId || -1);
    const [createMessage] = useCreateMessageMutation();
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [message, setMessage] = useState('');
    const ws = useRef<WebSocket | null>(null);
    
    useEffect(() => {
        setMessages(messagesApi || []);
    }, [messagesApi])

    useEffect(() => {
        refetch();
        ws.current = new WebSocket('ws://localhost:5050/');

        ws.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMessages(prev => [...prev, data]);
        };

        ws.current.onopen = () => {
            if (!message) ws.current?.send(JSON.stringify({ roomId: chatId, message: "" }))
        };
        return () => {
            setMessages([]);
            if (ws.current) ws.current.close();
        }
    }, [chatId]);

    const handleClick = () => {
        if (ws.current) ws.current.send(JSON.stringify({ roomId: chatId, message: message }));
        createMessage({message, chat_id: chatId});
        setMessage('');
    }

    const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }

    return (
        <Wrapper>
            <Messages>
                {
                    messages.map((elem, i) => <Message key={i}>{elem.message}</Message>)
                }
            </Messages>
            <InputMessage value={message} change={handleMessage} click={handleClick}/>
        </Wrapper>
    )
}
