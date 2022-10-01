import { createSlice } from "@reduxjs/toolkit";

const purchaseSlice = createSlice({
    name: 'purchase',
    initialState: {
        value: {
            id: '',
            name: '',
            desc: '',
            image: '',
            price: ''
        }
    },
    reducers: {
        add: (state, action) => {
            state.value = action.payload
        },
        remove: state => {
            state.value = {
                id: '',
                name: '',
                desc: '',
                image: '',
                price: ''
            }
        }
    }
})

export default purchaseSlice.reducer

export const { add, remove } = purchaseSlice.actions