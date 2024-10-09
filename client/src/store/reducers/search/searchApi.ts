import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../store/baseUrl";

export interface ISearchUsers {
    name: string,
    password: string
}

export const searchApi = createApi({
    reducerPath: 'searchApi',
    baseQuery: fetchBaseQuery({ baseUrl, credentials: 'include' }),
    endpoints: (builder) => ({
        getSearchUsers: builder.query<ISearchUsers[], string>({
            query: (str: string) => ({
                method: "GET",
                url: `search/all?str=${str}`,
            }),
        }),
    }),
});

export const {
    useGetSearchUsersQuery
} = searchApi;