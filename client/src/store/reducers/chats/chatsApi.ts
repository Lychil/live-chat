import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../store/baseUrl";

export const chatsApi = createApi({
    reducerPath: 'chatsApi',
    baseQuery: fetchBaseQuery({ baseUrl, credentials: 'include' }),
    endpoints: (builder) => ({
        createChat: builder.mutation<void, number>({
            query: (id: number) => ({
                method: "POST",
                url: `chats/create`,
                body: {id}
            }),
        }),
    }),
});

export const {
    useCreateChatMutation
} = chatsApi;