import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        logged: false,
        info: {
            id: '',
            username: '',
            email: '',
            tokens: {
                access: '',
                refresh: ''
            }
        }
    },
    reducers: {
        login: (state, action) => {
            state.logged = true
            state.info = action.payload
        },
        logout: state => {
            state.logged = false
            state.info = {
                id: '',
                username: '',
                email: ''
            }
        }
    }
})

export default loginSlice.reducer

export const { login, logout } = loginSlice.actions