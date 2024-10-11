import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../store/baseUrl";

export interface IChatPreview {
    id: number,
    buddy: number,
    user_id: number
}

export const chatsApi = createApi({
    reducerPath: 'chatsApi',
    baseQuery: fetchBaseQuery({ baseUrl, credentials: 'include' }),
    tagTypes: ["CREATE"],
    endpoints: (builder) => ({
        createChat: builder.mutation<void, number>({
            query: (id: number) => ({
                method: "POST",
                url: `chats/create`,
                body: {id}
            }),
            invalidatesTags: ["CREATE"]
        }),
        getChats: builder.query<IChatPreview[], void>({
            query: () => ({
                method: "GET",
                url: `chats/all`,
            }),
            providesTags: ["CREATE"]
        }),
    }),
});

export const {
    useGetChatsQuery,
    useCreateChatMutation
} = chatsApi;