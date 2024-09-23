import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user:  null
}

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginReducer(state, action) {
            state.user = action.payload;
        },
        logoutReducer(state, action) {
            return initialState
        },
    },
    selectors: {
        selectCurrentUser (state) {
            return state.user}
    }
}
)

export default usersSlice.reducer

export const {loginReducer, logoutReducer} = usersSlice.actions
export const {selectCurrentUser} = usersSlice.selectors

