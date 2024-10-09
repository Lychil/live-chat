import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user/userSlice";
import { userApi } from "./reducers/user/userApi";

const rootReducer = combineReducers({
    userReducer,
    [userApi.reducerPath]: userApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(userApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];