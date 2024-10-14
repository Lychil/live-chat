import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../store/baseUrl";

export interface IMessage {
    id: number,
    message: string,
    user_id: number,
    chat_id: number
}

export interface ICreateMessage {
    message: string,
    chat_id: number,
}

export const messagesApi = createApi({
    reducerPath: 'messagesApi',
    baseQuery: fetchBaseQuery({ baseUrl, credentials: 'include' }),
    tagTypes: ["CREATE"],
    endpoints: (builder) => ({
        getMessages: builder.query<IMessage[], number>({
            query: (id: number) => ({
                method: "GET",
                url: `messages/all?id=${id}`,
            }),
        }),
        createMessage: builder.mutation<void, ICreateMessage>({
            query: (message: ICreateMessage) => ({
                method: "POST",
                url: `messages/create`,
                body: message
            }),
        }),
    }),
});

export const {
    useGetMessagesQuery,
    useCreateMessageMutation
} = messagesApi;