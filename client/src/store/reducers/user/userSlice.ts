import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
    name: string
}

export interface IUserState {
    user: IUser,
    isAuthorized: boolean
}

const initialState = <IUserState>{};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = Object.assign(action.payload);
        },
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuthorized = action.payload;
        },
        resetUser: () => {
            return initialState;
        } 
    }
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;