import { createSlice } from "@reduxjs/toolkit";

const purchaseSlice = createSlice({
    name: 'purchase',
    initialState: {
        id: '',
        price: ''
    },
    reducers: {
        add: (state, action) => {
            state.id = action.payload.id
            state.price = action.payload.price
        },
        remove: state => {
            state.id = ''
            state.price = ''
        }
    }
})

export default purchaseSlice.reducer

export const { add, remove } = purchaseSlice.actions