import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../store/baseUrl";
import { IUser } from "./userSlice";

export interface IAuth {
    name: string,
    password: string
}

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl, credentials: 'include' }),
    tagTypes: ["LOGIN"],
    endpoints: (builder) => ({
        createUser: builder.mutation<void, IAuth>({
            query: (body: IAuth) => ({
                method: "POST",
                url: "users/create",
                body: body
            }),
            invalidatesTags: ["LOGIN"]
        }),
        login: builder.mutation<void, IAuth>({
            query: (body: IAuth) => ({
                method: "POST",
                url: "users/login",
                body: body
            }),
            invalidatesTags: ["LOGIN"]
        }),
        exit: builder.mutation<void, void>({
            query: () => ({
                method: "POST",
                url: "users/exit",
            }),
            invalidatesTags: ["LOGIN"]
        }),
        isAuth: builder.query<IUser, void>({
            query: () => ({
                method: "GET",
                url: "users/check",
            }),
            providesTags: ["LOGIN"]
        }),
        getUserInfo: builder.query<IUser, number>({
            query: (id: number) => ({
                method: "GET",
                url: `users/info?id=${id}`,
            }),
        }),
    }),
});

export const {
    useGetUserInfoQuery,
    useIsAuthQuery,
    useCreateUserMutation,
    useLoginMutation,
    useExitMutation
} = userApi;

export const checkIsAuth = (): boolean => !!useIsAuthQuery().data?.name;