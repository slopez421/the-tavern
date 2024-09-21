import {createSlice} from "@reduxjs/toolkit";
import { useLogoutMutation } from "../api/apiSlice";

const initialState = {
    user:  null
}

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload;
        },
        logout(state) {
            state.user = null;
        },
    },
    selectors: {
        selectCurrentUser (state) {
            return state.user}
    }
}
)

export default usersSlice.reducer
export const {login, logout} = usersSlice.actions
export const {selectCurrentUser} = usersSlice.selectors

