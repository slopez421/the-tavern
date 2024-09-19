import {createSlice} from "@reduxjs/toolkit";
import { selectCurrentUsername } from "../auth/authSlice";

const initialState = [
    { 
        id: 1,
        username: 'sjohnson',
        first_name: 'Sally',
        last_name : 'Johnson',
    },
    { 
        id: 2,
        username: 'jdoe',
        first_name: 'Jane',
        last_name : 'Doe',
    },
]

// create slice and pass initial state
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        }
    }
)

export default usersSlice.reducer
export const selectAllUsers = (state) => state.users

export const selectUserById = (state, userId) =>
    state.users.find(user => user.id === parseInt(userId))

export const selectCurrentUser = (state) => {
    const currentUsername = selectCurrentUsername(state)
    return selectUserById(state, currentUsername)
  }

