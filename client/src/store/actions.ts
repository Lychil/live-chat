import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { userActions } from "./reducers/user/userSlice";
import { messagesActions } from "./reducers/messages/messagesSlice";

const actions = {
    ...userActions,
    ...messagesActions
};


export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};