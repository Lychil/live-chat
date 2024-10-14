import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user/userSlice";
import { userApi } from "./reducers/user/userApi";
import { searchApi } from "./reducers/search/searchApi";
import { chatsApi } from "./reducers/chats/chatsApi";
import { messagesApi } from "./reducers/messages/messagesApi";
import { messagesReducer } from "./reducers/messages/messagesSlice";

const rootReducer = combineReducers({
    userReducer,
    messagesReducer,
    [userApi.reducerPath]: userApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [chatsApi.reducerPath]: chatsApi.reducer,
    [messagesApi.reducerPath]: messagesApi.reducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(userApi.middleware)
            .concat(searchApi.middleware)
            .concat(chatsApi.middleware)
            .concat(messagesApi.middleware)
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];