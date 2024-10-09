import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { userActions } from "./reducers/user/userSlice";

const actions = {
    ...userActions,
};


export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};