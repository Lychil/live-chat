import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMessage } from "./messagesApi";

export interface ICurrentChat {
    id: number,
    messages: IMessage[]
}

const initialState: ICurrentChat = <ICurrentChat>{};

export const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        setMessages: (state, actions: PayloadAction<IMessage[]>) => {
            state.messages = actions.payload;
        },
        setChatId: (state, actions: PayloadAction<number>) => {
            state.id = actions.payload;
        },
        resetMessages: () => {
            return initialState;
        } 
    }
});

export const messagesReducer = messagesSlice.reducer;
export const messagesActions = messagesSlice.actions;