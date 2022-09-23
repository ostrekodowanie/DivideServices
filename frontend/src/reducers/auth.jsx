import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        logged: false,
        info: {}
    },
    reducers: {
        login: (state, action) => {
            state = {
                logged: true,
                info: action.payload
            }
        },
        logout: state => {
            state = {
                logged: false,
                info: {}
            }
        }
    }
})

export default loginSlice.reducer

export const { login, logout } = loginSlice.actions